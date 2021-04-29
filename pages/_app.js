import '../styles/globals.scss'
import { GeistProvider, CssBaseline, useToasts } from '@geist-ui/react'
import {AppContext,UserContext} from '../context/appcontext'
import {useEffect, useState} from 'react'
import 'react-awesome-slider/dist/styles.css';
import NProgress from 'nprogress';
import { useRouter } from 'next/router';
import 'nprogress/nprogress.css'; //styles of nprogress
import { appWithTranslation } from 'next-i18next'
import { FirebaseAuthProvider } from "@react-firebase/auth";
import {firebase} from '../lib/firebase'
import {firebaseConfig} from '../lib/firebase';
import { getUserInfo } from '../lib/userapi'
import { hotjar } from 'react-hotjar';
import Spinner from '../components/Spinner'
import dynamic from 'next/dynamic'
import Layout from '../components/Layout';

const LoadingPage = () => {

  return (
    <div className="loading-page">
      <Spinner/>
    </div>
  )
}

const DynamicLayoutLoad = dynamic(
  () => import('../components/Layout'),
  { loading: () => <LoadingPage/> }
)

const MyApp = ({ Component, pageProps }) => {
  const [app,setApp] = useState({mobile: false,loading: false,scroll: false,signUp: false})
  const [user,setUser] = useState({logged: false,triedLog: false,jwt: ''})
  const router = useRouter();
  const [,setToast] = useToasts();
  NProgress.configure({ showSpinner: true });

  useEffect( async() => {
    router.events.on('routeChangeStart', () => {
      NProgress.start();
    });
    router.events.on('routeChangeComplete', () => {
      NProgress.done();
    });
    return () => {
      router.events.on('routeChangeError', () => {
        NProgress.done();
      });
    }
  }, [router.route])

  const setMobile = (state) => {
    setApp({...app,mobile: state})
  }

  useEffect(async () => {
    hotjar.initialize(2350733, 6); // hot jar
    firebase.auth().onAuthStateChanged( async (fuser) => { // listen to fire base user changes
      if (fuser === null){ // if not logged
        setApp({mobile: false,loading: false,scroll: false,signUp: false});
        setUser({...user,triedLog: true});
        if (router.pathname.includes('user')){ // protects route
          setToast({type:"error",text: 'Please login'})
          router.replace('/')
        }
      }else{ // if user is logged
        const token = await firebase.auth().currentUser.getIdToken()
        const pinfo = await getUserInfo({jwt: token}); // fetches user info from server
        if (pinfo.data !== undefined && pinfo.data.result.code === 0){
          setUser({triedLog: true,email: fuser.email,name: fuser.displayName,uid: fuser.uid,pinfo: pinfo.data.payload[0],logged: true,jwt: token})
        }else if (pinfo.result.code === -1){ // user didn't finish sign up
          setUser({...user,logged: true,jwt: token});
          setApp({...app,signUp: true})
          if (router.pathname.includes('user')){ // protects route
            setToast({type:"error",text: 'Please finish sign up'})
            router.replace('/login')
          }
        }
      }
      });
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        // Set window width/height to state
        if (window.innerWidth < 900)
          setMobile(true)
        else
        {
          setMobile(false)
        }
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
    }
  }, [])

  return(
    <GeistProvider>
    <CssBaseline />
    <FirebaseAuthProvider firebase={firebase} {...firebaseConfig} >
    <AppContext.Provider value={[app,setApp]}>
    <UserContext.Provider value={[user,setUser]}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContext.Provider>
    </AppContext.Provider> 
    </FirebaseAuthProvider>
    </GeistProvider>
    )
}
export default appWithTranslation(MyApp)

