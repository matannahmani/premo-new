import { slide as Menu } from 'react-burger-menu'
import { Button, Text, Image} from '@geist-ui/react'
import { Menu as MenuIcon } from '@geist-ui/react-icons'
import ActiveLink from './ActiveLink'
import {firebase} from '../lib/firebase'
import { useContext } from 'react';
import { UserContext } from '../context/appcontext';
const Navbarm = (props) => {
    const [user,setUser] = useContext(UserContext);
    const logoutHandler = () => {
        firebase.auth().signOut();
        setUser(({logged: false,triedLog: true,jwt: ''}))
      }
    return (
        <div className="navbar navbar-mobile">
        <Menu width={"240px"} customBurgerIcon={<MenuIcon/>} right pageWrapId={ "page-wrap" } outerContainerId={"__next"}>
        <ActiveLink href="/price">
        <Text>Pricing</Text>
        </ActiveLink>
        <ActiveLink href="/device">
        <Text>Devices</Text>
        </ActiveLink>
        <ActiveLink href="/premozone">
        <Text>PremoZone</Text>
        </ActiveLink>
        <span style={{border: '1px solid #D5D6D5',margin: '16px 0px'}}></span>
        {!user.logged ?
            <ActiveLink  href="/login"><span>Login</span></ActiveLink>
        :
          <>
            <ActiveLink href="/user/payment">
            <Text>Payment</Text>
            </ActiveLink>
            <ActiveLink href="/user/account">
            <Text>Account</Text>
            </ActiveLink>
            <ActiveLink href="/" logout><span onClick={logoutHandler}>Logout</span></ActiveLink>
        </>
        }
        </Menu>
        <Button auto size="small" onClick={props.setCalendly} className="bookbtn">Book Consulation</Button>
        <ActiveLink href="/">
        <Image src="/logo-short.svg" width={60} height={60}/>
        </ActiveLink>
        </div>
    )
}

export default Navbarm