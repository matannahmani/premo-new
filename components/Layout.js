import {Grid,Modal,useModal} from '@geist-ui/react'
import {useContext} from 'react'
import {AppContext, UserContext} from '../context/appcontext';
import NavbarM from './Navbarm'
import NavbarD from './Navbard'
import Footer from './Footer';
import { InlineWidget } from "react-calendly";
import { useRouter } from 'next/router';
import {firebase} from '../lib/firebase'
import { X } from '@geist-ui/react-icons';


const Layout = (props) => {
    const [app,setApp] = useContext(AppContext);
    const [user,setUser] = useContext(UserContext);
    const { visible, setVisible, bindings } = useModal()
    const router = useRouter();
    const lang = (i) => {
      const dic = {
        en:{
          "bookconsultation": "Book Consultation",
          "pricing": "Pricing",
          "device": "Devices",
          "premozone": "Premo Life",
          "premoLogin": "Login",
          "accountcontrol": "Account Settings",
          "payment": "Payment",
          "account": "Account",
          "logout": "Log out",
    
    
        },
        kr:{
          "bookconsultation": "북 상담",
          "pricing": "가격결정",
          "device": "장치들",
          "premozone": "Premo Life",
          "premoLogin": "프리모 로그인",
          "accountcontrol": "계정 컨트롤",
          "payment": "결제",
          "account": "계정",
          "logout": "로그아웃",
        }
      }
      if (router.locale == "en")
        return dic["en"][i]
      else
        return dic["kr"][i]
    }

    const logoutHandler = () => {
      firebase.auth().signOut();
      setApp({...app,signUp: false});
      setUser({logged: false,triedLog: false,jwt: ''});
    }

    return (
      <>
        <Grid.Container className={router.locale === 'en' ? 'en' : 'kr'} >
          {app.mobile ? <NavbarM user={user} logoutHandler={logoutHandler} t={lang} setCalendly={() => setVisible(true)}/> : <NavbarD  t={lang} user={user} logoutHandler={logoutHandler} setCalendly={() => setVisible(true)}/>}
          <div id="page-wrap">
          {props.children}
          </div>
          <Footer/>
          <Modal {...bindings}>
          <Modal.Content style={{overflow: 'hidden',height: '630px'}}>
          <InlineWidget url="https://calendly.com/premo-consulting/15min" />
          </Modal.Content>
          <Modal.Action passive onClick={() => setVisible(false)}><X/></Modal.Action>
          </Modal>
        </Grid.Container>
      </>
    )
}

export default Layout