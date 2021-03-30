import { slide as Menu } from 'react-burger-menu'
import {Card,Button, Link, Text} from '@geist-ui/react'
import { Menu as MenuIcon } from '@geist-ui/react-icons'
import Image from 'next/image'

const Navbarm = (props) => {

    return (
        <div className="navbar navbar-mobile">
        <Menu width={"240px"} customBurgerIcon={<MenuIcon/>} right pageWrapId={ "page-wrap" } outerContainerId={"__next"}>
        <Link href="/price">
        <Text className="bm-item-active">Pricing</Text>
        </Link>
        <Link href="/consult">
        <Text>Consulting</Text>
        </Link>
        <Link href="/devices">
        <Text>Devices</Text>
        </Link>
        <Link href="/lookbook">
        <Text>LookBook</Text>
        </Link>
        <Link href="/premozone">
        <Text>PremoZone</Text>
        </Link>
        <span style={{border: '1px solid #D5D6D5',margin: '16px 0px'}}></span>
        <Link href="/user/payment">
        <Text>Payment</Text>
        </Link>
        <Link href="/user/account">
        <Text>Account</Text>
        </Link>
        <Link href="/">
        <Text>Logout</Text>
        </Link>
        </Menu>
        <Button size="small" onClick={props.setCalendly} className="bookbtn">Book Consulation</Button>
        <Link href="/">
        <Image src="/logo-short.svg" width="40px" height="40px"/>
        </Link>
        </div>
    )
}

export default Navbarm