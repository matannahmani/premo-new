import {Grid,Button,Card,Spacer,Input,Dot,useToasts, Text} from '@geist-ui/react';
import React,{useState,useEffect,useContext} from 'react';
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
import { checkEmail, getUserInfo } from '../lib/userapi';
import LoginInput from '../components/Logininput';
import Head from 'next/head';

const Login = () => {
    const { t } =  useTranslation(['common']);
    const [account,setAccount] = useState({username: '',password: ''})
    const [, setToast] = useToasts();
    const [loading,setLoading] = useState(true);
    const [user,setUser] = useContext(UserContext);
    const [app,setApp] = useContext(AppContext);
    const router = useRouter();
    const loginHandler = async () =>{
        const emailexist = await checkEmail(account.username);
        let register;
        if (emailexist.data.result.code !== 0){
            register = true;
        }else{
            register = false;
        }
        if (!loading){
            setLoading(true);
            if (account.username.length > 4 && account.password.length > 4){
                if (!register){ // new register
                        await firebase.auth().signInWithEmailAndPassword(account.username, account.password)
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
                        await firebase.auth().createUserWithEmailAndPassword(account.username, account.password)
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
                setApp({...app,signUp: true});
                setUser({triedLog: true,logged: false,jwt: userCredential.user.za,displayName: userCredential.user.displayName})
                setLoading(false);
            }
            else{
                setToast({type: 'success',text: t('common:logged')})
                setUser({triedLog: true,email: pinfo.email,name: pinfo.displayName,uid: pinfo.uid,pinfo: pinfo.data.payload[0],logged: true,jwt: userCredential.user.za})
                router.replace('/')
            }
        } catch (error) {
            setApp({...app,signUp: true});
            setUser({triedLog: true,logged: false,jwt: userCredential.user.za,displayName: userCredential.user.displayName})
            setLoading(false);
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
    const appleonclick = () => {
            const appleProvider = new firebase.auth.OAuthProvider('apple.com');
            appleProvider.addScope('email');
            appleProvider.addScope('name');
            oauthLogin(appleProvider);
    }
    useEffect( async () => {
        if (!app.signUp && await firebase.auth().currentUser !== null){
            router.push('/');
            setToast({type: "success",text: t('loggedback')});
        }else if (app.signUp){
            setLoading(false);
        }
    }, [])
    useEffect(() => {
        if (!user.triedLog) return;
        if (user.triedLog && user.pinfo === undefined){
            setLoading(false);
        }else{
            router.push('/')
        }
    }, [user.triedLog])
    return ( // TO DO FIX THE LAYOUT AS GRID DOSENT WORK!
        <>
        <Head>
        <title>{router.locale === 'en' ? `Premo | ${app.signUp ? 'Sign Up' : 'Login'}` : `프리모 | ${app.signUp ? 'Sign Up' : 'Login'}` }</title>
        </Head>
        {app.signUp ?
        <Signup t={t}/>
        :
        <Grid.Container style={{height: '100%',minHeight: '300px',width:'100%',margin: '0px',paddingBottom: '64px',background: '#ECF3F6'}} gap={2} direction="column" alignItems="center">
        <Grid style={{maxWidth: '100%'}} direction="column" alignItems="center" justify="center">
        <Spacer/>
        <Text h1 className="login-title" b>{t('common:account')} {t('common:premoLogin')}</Text>
        <Spacer y={1}/>
        <Card className="logincard" style={{borderRadius: '16px'}} shadow type={"lite"}>
        {loading ? <Spinner/>
        :
        <>
        <Button onClick={() => appleonclick()} icon={<Apple viewBox="0 0 30 30" width={null} height={null}/>} className="loginbtn blackbtn" type="abort" size="large">{t('common:applebtn')}</Button>
        <Spacer y={1}/>
        <Button onClick={() => oauthLogin(new firebase.auth.FacebookAuthProvider())} icon={<Facebook  viewBox="0 0 30 30" width={null} height={null}/>} className="loginbtn whitebtn" type="abort" size="large">{t('common:facebookbtn')}</Button>
        <Spacer y={1}/>
        <Button onClick={() => oauthLogin(new firebase.auth.GoogleAuthProvider())} icon={<Google viewBox="0 0 30 30" width={null} height={null}/>} className="loginbtn whitebtn" type="abort" size="large">{t('common:googlebtn')}</Button>
        <Spacer y={1.5}/>
        <span className="minor-wolf">{t('common:or')}</span>
        <Spacer y={1.5}/>
        <span className="normal">{t('common:emailorpass')}</span>
        <Spacer y={1.5}/>
        <LoginInput label={t('common:email')} value={account.username.length > 0 ? account.username : ''} onChange={(e) => setAccount({...account,username: e.target.value})} name="email" placeholder="birito@naver.com"  />
        <LoginInput label={t('common:password')} value={account.password.length > 0 ? account.password : ''} onChange={(e) => setAccount({...account,password: e.target.value})} type="password" name="password" placeholder="*****" />
        <Spacer y={0.5}/>
        <Button onClick={() => loginHandler()} type="abort" className="learnbtn loginbtn countinebtn">{t('common:countine')}</Button>
        <Spacer y={0.5}/>
        <Grid style={{display: 'flex',flexDirection: 'column'}}>
            <Link href="/forgotpassword">
                <span style={{color: '#56ADE8',textAlign: 'center',cursor: 'pointer'}}>{t('common:resetpassword')}</span>
            </Link>
            <Spacer/>
            <span>{t('common:accepttos')}</span>
        </Grid>
        </>
        }
        </Card>
        </Grid>
    </Grid.Container>}
    </>
    )
}
export const getStaticProps = async ({ locale }) => ({
    props: {
      ...await serverSideTranslations(locale, ['common']),
    },
  })
export default Login;