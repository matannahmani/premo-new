import '../styles/globals.scss'
import { GeistProvider, CssBaseline } from '@geist-ui/react'
import Layout from '../components/Layout'
import {AppContext} from '../context/appcontext'
import {useEffect, useState} from 'react'
import 'react-awesome-slider/dist/styles.css';
import NProgress from 'nprogress';
import Router from 'next/router';
import 'nprogress/nprogress.css'; //styles of nprogress
import { appWithTranslation } from 'next-i18next'

const MyApp = ({ Component, pageProps }) => {
  const [app,setApp] = useState({mobile: false})
  NProgress.configure({ showSpinner: true });

  Router.events.on('routeChangeStart', () => NProgress.start());
  Router.events.on('routeChangeComplete', () => NProgress.done());
  Router.events.on('routeChangeError', () => NProgress.done());
  const setMobile = (state) => {
    setApp({...app,mobile: state})
  }
  useEffect(() => {
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
    <AppContext.Provider value={[app,setApp]}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </AppContext.Provider> 
    </GeistProvider>
    )
}
export default appWithTranslation(MyApp)

