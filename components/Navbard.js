import {Avatar,Card,Popover,Text,Button, Image} from "@geist-ui/react"
import {useState,useRef, useEffect} from 'react'
import {IoPersonCircleSharp} from 'react-icons/io5'
import { ChevronDown } from '@geist-ui/react-icons'
import ActiveLink from './ActiveLink'

const NavbarD = (props) => {
  // ghost navbar in future
  const [sticky,setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])
  const handleScroll = () => {
    if (window.scrollY > 70) {
      setSticky(true);
    } else if (window.scrollY < 70) {
      setSticky(false);
    }
  }

    const content = () => (
        <>
          <Popover.Item title>
            <span>User Settings</span>
          </Popover.Item>
          <Popover.Item>
            <ActiveLink href="/user/payment"><span>Payment</span></ActiveLink>
          </Popover.Item>
          <Popover.Item>
            <ActiveLink color href="/user/profile"><span>Account</span></ActiveLink>
          </Popover.Item>
          <Popover.Item>
            <ActiveLink color logout><span>Logout</span></ActiveLink>
          </Popover.Item>
        </>
      )

    return (
        <div className={`navbar navbar-desktop ${sticky ? 'nav-sticky' : ''}`}>
        <div className="nav-item navbar-icon">
          <ActiveLink href="/">
            <Image src="/logo-main.svg" width="120" height="80"/>
          </ActiveLink>
        </div>
        <div className="navbar-content">
            <Button auto size="small" onClick={props.setCalendly} className="nav-item bookbtn">Book Consulation</Button>
            <ActiveLink href="/price">
            <Text className="nav-item">Pricing</Text>
            </ActiveLink>
            {/* <ActiveLink href="/">
            <Text className="nav-item">Consulting</Text>
            </ActiveLink> */}
            <ActiveLink href="/device">
            <Text className="nav-item">Devices</Text>
            </ActiveLink>
            <ActiveLink href="/premozone">
            <Text className="nav-item">Premo Zone</Text>
            </ActiveLink>
            <ActiveLink href="#">
            <Text className="nav-item">Look Book</Text>
            </ActiveLink>
            <Popover portalClassName="portal-lg" className="child-flex nav-item" content={content}>
            <IoPersonCircleSharp style={{width:"30px",height:"30px"}} />
            <ChevronDown/>
            </Popover>
        </div>
        </div>
    )
}

export default NavbarD
