import {Grid,Text,Modal,useModal} from '@geist-ui/react'
import {useContext, useEffect,useState} from 'react'
import {AppContext} from '../context/appcontext';
import NavbarM from './Navbarm'
import NavbarD from './Navbard'
import Footer from './Footer';
import { InlineWidget } from "react-calendly";
import { useRouter } from 'next/router';
import Head from 'next/head';

const Layout = (props) => {
    const [app,setApp] = useContext(AppContext);
    const { visible, setVisible, bindings } = useModal()
    const router = useRouter();
    // let isScrolling;

    // useEffect(() => {
    //   window.addEventListener('scroll', ( event ) => {
    //     !app.scroll && setApp({...app,scroll: true})
    //     // Clear our timeout throughout the scroll
    //     window.clearTimeout( isScrolling );
    //     // Set a timeout to run after scrolling ends
    //     isScrolling = setTimeout(() => {
    //       setApp({...app,scroll: false})      
    //     }, 66);
      
    //   }, false);
    // }, [])
    return (
      <>
      <Head>
        <title>{router.locale === 'kr' ? '프리모 - 홈' : "Premo"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Grid.Container className={router.locale === 'en' ? 'en' : 'kr'} >
          {app.mobile ? <NavbarM setCalendly={() => setVisible(true)}/> : <NavbarD setCalendly={() => setVisible(true)}/>}
          <div id="page-wrap">
          {props.children}
          </div>
          <Footer/>
          <Modal {...bindings}>
          <Modal.Content style={{overflow: 'hidden',height: '630px'}}>
          <InlineWidget url="https://calendly.com/premo-consulting/15min" />
          </Modal.Content>
          <Modal.Action passive onClick={() => setVisible(false)}>Cancel</Modal.Action>
          </Modal>
        </Grid.Container>
      </>
    )
}

export default Layout