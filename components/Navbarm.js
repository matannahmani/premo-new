import { slide as Menu } from 'react-burger-menu'
import { Button, Text, Image} from '@geist-ui/react'
import { Menu as MenuIcon } from '@geist-ui/react-icons'
import ActiveLink from './ActiveLink'

const Navbarm = (props) => {

    return (
        <div className="navbar navbar-mobile">
        <Menu width={"240px"} customBurgerIcon={<MenuIcon/>} right pageWrapId={ "page-wrap" } outerContainerId={"__next"}>
        <ActiveLink href="/price">
        <Text>Pricing</Text>
        </ActiveLink>
        {/* <ActiveLink href="/consult">
        <Text>Consulting</Text>
        </ActiveLink> */}
        <ActiveLink href="/device">
        <Text>Devices</Text>
        </ActiveLink>
        <ActiveLink href="/lookbook">
        <Text>LookBook</Text>
        </ActiveLink>
        <ActiveLink href="/premozone">
        <Text>PremoZone</Text>
        </ActiveLink>
        <span style={{border: '1px solid #D5D6D5',margin: '16px 0px'}}></span>
        <ActiveLink href="/user/payment">
        <Text>Payment</Text>
        </ActiveLink>
        <ActiveLink href="/user/account">
        <Text>Account</Text>
        </ActiveLink>
        <ActiveLink href="/">
        <Text>Logout</Text>
        </ActiveLink>
        </Menu>
        <Button auto size="small" onClick={props.setCalendly} className="bookbtn">Book Consulation</Button>
        <ActiveLink href="/">
        <Image src="/logo-short.svg" width={60} height={60}/>
        </ActiveLink>
        </div>
    )
}

export default Navbarm