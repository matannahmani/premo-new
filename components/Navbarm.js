import { slide as Menu } from 'react-burger-menu'
import {Card,Button} from '@geist-ui/react'
import { Menu as MenuIcon } from '@geist-ui/react-icons'
import Image from 'next/image'

const Navbarm = () => {

    return (
        <div className="navbar navbar-mobile">
        <Menu width={"240px"} customBurgerIcon={<MenuIcon/>} right pageWrapId={ "page-wrap" } outerContainerId={"__next"}>
        <a>Pricing</a>
        <a>Consulting</a>
        <a>Devices</a>
        <a>LookBook</a>
        <a>PremoZone</a>
        </Menu>
        <Button className="bookbtn">Book Consulation</Button>
        <Image src="/logo-short.svg" width="40px" height="40px"
        />
        </div>
    )
}

export default Navbarm