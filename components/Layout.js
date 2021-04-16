import {Grid,Text,Modal,useModal} from '@geist-ui/react'
import {useContext, useEffect,useState} from 'react'
import {AppContext} from '../context/appcontext';
import NavbarM from './Navbarm'
import NavbarD from './Navbard'
import Footer from './Footer';
import { InlineWidget } from "react-calendly";
import { useRouter } from 'next/router';

const Layout = (props) => {
    const [app,setApp] = useContext(AppContext);
    const { visible, setVisible, bindings } = useModal()
    const router = useRouter();
    return (
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
    )
}

export default Layout