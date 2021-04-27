import {Popover,Text,Button, Image} from "@geist-ui/react"
import {useState, useEffect, useContext} from 'react'
import {IoPersonCircleSharp} from 'react-icons/io5'
import { ChevronDown } from '@geist-ui/react-icons'
import ActiveLink from './ActiveLink'
import {firebase} from '../lib/firebase'
import { UserContext } from "../context/appcontext"

const NavbarD = (props) => {
  // ghost navbar in future
  const [sticky,setSticky] = useState(false);
  const [user,] = useContext(UserContext)
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
          {!user.logged ?
          <Popover.Item>
            <ActiveLink  href="/login"><span>Login</span></ActiveLink>
          </Popover.Item>
          :
          <>
          <Popover.Item>
            <ActiveLink href="/user/payment"><span>Payment</span></ActiveLink>
          </Popover.Item>
          <Popover.Item>
            <ActiveLink  href="/user/profile"><span>Account</span></ActiveLink>
          </Popover.Item>

          <Popover.Item>
            <ActiveLink href="/" logout><span onClick={() => firebase.auth().signOut()}>Logout</span></ActiveLink>
          </Popover.Item>
          </>
        }
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
            <div>
            <Popover portalClassName="portal-lg" className="child-flex nav-item" content={content}>
            <IoPersonCircleSharp style={{width:"30px",height:"30px"}} />
            <ChevronDown/>
            </Popover>
            </div>
        </div>
        </div>
    )
}

export default NavbarD
