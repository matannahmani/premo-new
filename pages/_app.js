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
import Layout from '../components/Layout';
import Head from 'next/head';
const LoadingPage = () => {

  return (
    <div className="loading-page">
      <Spinner/>
    </div>
  )
}

const MyApp = ({ Component, pageProps }) => {
  const [app,setApp] = useState({mobile: false,loading: false,scroll: false,signUp: false})
  const [user,setUser] = useState({logged: false,triedLog: false,jwt: ''})
  const router = useRouter();
  const [firstLoad,setLoad] = useState(true);
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
          if (router.pathname.includes('user') || router.pathname.includes('forgotpassword')){ // protects route
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

  useEffect(() => {
    if (!user.triedLog) return;
    setLoad(false);
  }, [user.triedLog])

  return(
    <>
    <Head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
    <link rel="apple-touch-icon" sizes="60x60" href="favicons/apple-icon-60x60.png"/>
    <link rel="apple-touch-icon" sizes="72x72" href="favicons/apple-icon-72x72.png"/>
    <link rel="apple-touch-icon" sizes="76x76" href="favicons/apple-icon-76x76.png"/>
    <link rel="apple-touch-icon" sizes="114x114" href="favicons/apple-icon-114x114.png"/>
    <link rel="apple-touch-icon" sizes="120x120" href="favicons/apple-icon-120x120.png"/>
    <link rel="apple-touch-icon" sizes="144x144" href="favicons/apple-icon-144x144.png"/>
    <link rel="apple-touch-icon" sizes="152x152" href="favicons/apple-icon-152x152.png"/>
    <link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-icon-180x180.png"/>
    <link rel="icon" type="image/png" sizes="192x192"  href="favicons/android-icon-192x192.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="favicons/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="96x96" href="favicons/favicon-96x96.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="favicons/favicon-16x16.png"/>
    <link rel="manifest" href="favicons/manifest.json"/>
    <meta property="og:title" content="Premo" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="https://premo.vercel.app/" />
    <meta property="og:image" content="https://premo.vercel.app/logo-main.svg" />
    <meta property="og:description" content="Premo Offical Website" />
    <meta name="msapplication-TileColor" content="#ffffff"/>
    <meta name="msapplication-TileImage" content="favicons/ms-icon-144x144.png"/>
    <meta name="theme-color" content="#ffffff"/>
    <meta name="keywords" content="프리모, premo, 에어비앤비, airbnb, 쉐어하우스, 공유오피스, 숙소관리, 에어비앤비 서울, 스마트홈, smart home, IoT, 단기임대, 숙소임대, 임대숙소"/>
    </Head>
    <GeistProvider>
    <CssBaseline />
    <FirebaseAuthProvider firebase={firebase} {...firebaseConfig} >
    <AppContext.Provider value={[app,setApp]}>
    <UserContext.Provider value={[user,setUser]}>
      {firstLoad ?
      <LoadingPage/>
      :
      <Layout>
        <Component {...pageProps} />
      </Layout>
      }
    </UserContext.Provider>
    </AppContext.Provider> 
    </FirebaseAuthProvider>
    </GeistProvider>
    </>
    )
}
export default appWithTranslation(MyApp)

