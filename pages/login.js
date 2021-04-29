import {Grid,Button,Card,Spacer,Input,Dot,useToasts, Text} from '@geist-ui/react';
import React,{useState,useEffect,useContext, useRef} from 'react';
import { useRouter } from 'next/router';
import { AppContext, UserContext } from '../context/appcontext';
import {firebase} from '../lib/firebase'
import Google from '../public/icons/google.svg';
import Facebook from '../public/icons/facebook.svg';
import Apple from '../public/icons/apple.svg';
import Spinner from '../components/Spinner';
import Link from 'next/link';
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Signup from '../components/Signup';
import { getUserInfo } from '../lib/userapi';

const AdminLogin = () => {
    const { t } =  useTranslation(['common']);
    const username = useRef(null);
    const password = useRef(null);
    const [, setToast] = useToasts();
    const [loading,setLoading] = useState(false);
    const [user,setUser] = useContext(UserContext);
    const [signUp,setSignUp] = useState(false);
    const router = useRouter();
    const loginHandler = async (register) =>{
        if (!loading && username.current !== null && password.current !== null){
            setLoading(true);
            if (username.current.value.length > 4 && password.current.value.length > 4){
                if (!register){ // new register
                        await firebase.auth().signInWithEmailAndPassword(username.current.value, password.current.value)
                        .then(async (userCredential) => { // for some reason if i call a function inside a then it triggers catch
                            firebaseLogHandler(userCredential);
                        }). catch (error => {
                            const errorMessage = error.message;
                            setToast({type: 'error',text: t('common:loginerror')})
                            setLoading(false);
                    })
            }
                else{
                    try{
                        await firebase.auth().createUserWithEmailAndPassword(username.current.value, password.current.value)
                        .then((userCredential) => {
                            setToast({type: 'success',text: t('accountcreated')})
                            firebaseLogHandler(userCredential);
                        })
                    } catch (error) {
                        const errorMessage = error.message;
                        setToast({type: 'error',text: t('emailinuse')})
                        setLoading(false);
                    }
                }

            }
            else{
                setToast({type: "warning",text: t('common:loginshort')});
                setLoading(false);
            }
        }
    }

    const firebaseLogHandler = async (userCredential) => {
        try {
            const pinfo = await getUserInfo({jwt: userCredential.user.za});
            if (pinfo.data === undefined && pinfo.result.code === -1){
                setSignUp(true);
                setUser({triedLog: true,logged: false,jwt: userCredential.user.za,displayName: userCredential.user.displayName})
                setLoading(false);
            }
            else{
                setToast({type: 'success',text: t('common:logged')})
                setUser({triedLog: true,email: pinfo.email,name: pinfo.displayName,uid: pinfo.uid,pinfo: pinfo.data.payload[0],logged: true,jwt: userCredential.user.za})
                router.replace('/')
            }
        } catch (error) {
            setSignUp(true);
            setUser({triedLog: true,logged: false,jwt: userCredential.user.za,displayName: userCredential.user.displayName})
            setLoading(false);
        }
    }

    const keyPressHandler = (e) => {
        if (e.repeat) { return }
        if ( e.key === "Enter"){
            loginHandler();
        }
    }
    const oauthLogin = async (auth) => {
        setLoading(true);
        try{
            await firebase.auth().signInWithPopup(auth).then((userCredential) => {
                firebaseLogHandler(userCredential);
            })
        } catch (error) {
            // failed login
            setToast({type: 'warning',text: t('common:404')})
            setLoading(false);
        }
    }

    useEffect( async () => {
        // if (!loading)
        //     window.addEventListener('keypress', keyPressHandler);
        if (firebase.auth().currentUser !== null){
            router.push('/');
            setToast({type: "success",text: t('loggedback')});
        }
        // return () => {
        //     window.removeEventListener('keypress', keyPressHandler);
        // }
    }, [])

    const LoginPage = () => (
        <Grid.Container style={{height: '100%',padding: '64px 0px',background: '#ECF3F6'}} gap={2} direction="column"  alignItems="center" justify="center">
        {loading ? <Spinner/>
        :
        <Grid direction="column" alignItems="center" justify="center">
        <Card className="logincard" style={{borderRadius: '16px'}} shadow type={"lite"}>
        <Text h3 className="title" b>{t('common:account')} {t('common:premoLogin')}</Text>
        <Spacer/>
        <Input ref={username} name="email" autoComplete="on" placeholder="Admin" width="240px">
        <Dot color="black" type="success">{t('common:email')}</Dot>
        </Input>
        <Spacer/>
        <Input.Password ref={password} name="password" autoComplete="on" width="240px">
        <Dot color="black" type="success">{t('common:password')}</Dot>
        </Input.Password>
        <Spacer/>
        <Grid style={{display: 'flex',width: '100%'}} justify="space-evenly">
            <Button style={{backgroundColor: '#F3A875',border: 'none',width: '120px'}} shadow size="medium" auto onClick={() => loginHandler(false)} type="secondary">{t('common:premoLogin')}</Button>
            <Button style={{backgroundColor: '#3D5582',border: 'none',width: '120px'}} shadow size="medium" auto onClick={() => loginHandler(true)} type="secondary">{t('common:signUp')}</Button>
        </Grid>
        <Grid style={{display: 'flex',width: '100%'}} justify="space-evenly">
            <Google className="store-btn google-btn" onClick={() => oauthLogin(new firebase.auth.GoogleAuthProvider())}/>
            <Facebook className="store-btn facebook-btn" onClick={() => oauthLogin(new firebase.auth.FacebookAuthProvider())}/>
            <Apple className="store-btn apple-btn" onClick={() => {
                const appleProvider = new Firebase.auth.OAuthProvider('apple.com');
                appleProvider.addScope('email');
                appleProvider.addScope('name');
                oauthLogin(appleProvider);
            }}/>
        </Grid>
        <Grid style={{display: 'flex',flexDirection: 'column'}}>
            <Link href="/forgotpassword">
                <span style={{color: '#56ADE8',textDecoration: 'underline',textAlign: 'center',cursor: 'pointer'}}>{t('common:resetpassword')}</span>
            </Link>
            <Spacer/>
            <span>{t('common:accepttos')}</span>
        </Grid>
        </Card>
        </Grid>
        }
    </Grid.Container>
    )

    return ( // TO DO FIX THE LAYOUT AS GRID DOSENT WORK!
        signUp ?
        <Signup/>
        :
        <LoginPage/>
    )
}
export const getStaticProps = async ({ locale }) => ({
    props: {
      ...await serverSideTranslations(locale, ['common']),
    },
  })
export default AdminLogin;