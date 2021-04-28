import {Grid,Modal,useModal} from '@geist-ui/react'
import {useContext} from 'react'
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
    const lang = (i) => {
      const dic = {
        en:{
          "bookconsultation": "Book Consultation",
          "pricing": "Pricing",
          "device": "Devices",
          "premozone": "Premo Zone",
          "premoLogin": "Login",
          "accountcontrol": "Account Settings",
          "payment": "Payment",
          "account": "Account",
          "logout": "logout",
    
    
        },
        kr:{
          "bookconsultation": "북 상담",
          "pricing": "가격결정",
          "device": "장치들",
          "premozone": "프리모 존",
          "premoLogin": "프리모 로그인",
          "accountcontrol": "계정 컨트롤",
          "payment": "결제",
          "account": "계정",
          "logout": "서명하다",
        }
      }
      if (router.locale == "en")
        return dic["en"][i]
      else
        return dic["kr"][i]
    }
    return (
      <>
      <Head>
        <title>{router.locale === 'kr' ? '프리모 - 홈' : "Premo"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Grid.Container className={router.locale === 'en' ? 'en' : 'kr'} >
          {app.mobile ? <NavbarM setCalendly={() => setVisible(true)}/> : <NavbarD t={lang} setCalendly={() => setVisible(true)}/>}
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