import { slide as Menu } from 'react-burger-menu'
import {Card,Button} from '@geist-ui/react'
import { Menu as MenuIcon } from '@geist-ui/react-icons'
import Image from 'next/image'

const Navbarm = () => {

    return (
        <div className="navbar navbar-mobile">
        <Menu width={"240px"} customBurgerIcon={<MenuIcon/>} right pageWrapId={ "page-wrap" } outerContainerId={"__next"}>
        <a className="bm-item-active">Pricing</a>
        <a>Consulting</a>
        <a>Devices</a>
        <a>LookBook</a>
        <a>PremoZone</a>
        <span style={{border: '1px solid #D5D6D5',margin: '80px 0px'}}></span>
        <a>Payment</a>
        <a>Account</a>
        <a>Logout</a>
        </Menu>
        <Button size="small" className="bookbtn">Book Consulation</Button>
        <Image src="/logo-short.svg" width="40px" height="40px"
        />
        </div>
    )
}

export default Navbarm