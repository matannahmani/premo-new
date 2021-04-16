import '../styles/globals.scss'
import { GeistProvider, CssBaseline } from '@geist-ui/react'
import Layout from '../components/Layout'
import {AppContext,UserContext} from '../context/appcontext'
import {useEffect, useState} from 'react'
import 'react-awesome-slider/dist/styles.css';
import NProgress from 'nprogress';
import Router from 'next/router';
import 'nprogress/nprogress.css'; //styles of nprogress
import { appWithTranslation } from 'next-i18next'
import { FirebaseAuthProvider } from "@react-firebase/auth";
import firebase from "firebase/app";
import {firebaseConfig} from '../lib/firebase';

const MyApp = ({ Component, pageProps }) => {
  const [app,setApp] = useState({mobile: false})
  const [user,setUser] = useState({logged: false})
  NProgress.configure({ showSpinner: true });

  Router.events.on('routeChangeStart', () => NProgress.start());
  Router.events.on('routeChangeComplete', () => NProgress.done());
  Router.events.on('routeChangeError', () => NProgress.done());
  const setMobile = (state) => {
    setApp({...app,mobile: state})
  }
  useEffect(async () => {
    firebase.auth().onAuthStateChanged( (fuser) => {
      if (fuser === null){
        setUser({logged: false})
      }else{
        setUser({email: fuser.email,name: fuser.displayName,uid: fuser.uid,logged: true})
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

