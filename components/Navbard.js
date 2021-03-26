import Image from 'next/image'
import {Avatar,Card,Popover,Text,Button} from "@geist-ui/react"
import {useState,useRef, useEffect} from 'react'
import {IoPersonCircleSharp} from 'react-icons/io5'
import { ChevronDown } from '@geist-ui/react-icons'
import Link from 'next/link'

const NavbarD = () => {
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
            <Link href="#">Payment</Link>
          </Popover.Item>
          <Popover.Item>
            <Link color href="#">Account</Link>
          </Popover.Item>
          <Popover.Item>
            <Link color href="#">Logout</Link>
          </Popover.Item>
        </>
      )
    const content2 = () => (
        <>
        <Popover.Item>
        <Link href="#">Photo Book</Link>
        </Popover.Item>
        <Popover.Item>
        <Link href="#">Premo Zone</Link>
        </Popover.Item>
        </>
    )
    return (
        <div className={`navbar navbar-desktop ${sticky ? 'nav-sticky' : ''}`}>
        <div className="navbar-icon">
            <Image src="/logo-main.svg" width="120px" height="80px"/>
        </div>
        <div className="navbar-content">
            <Button size="small" className="bookbtn">Book Consulation</Button>
            <Text>Pricing</Text>
            <Text>Consulting</Text>
            <Text>Devices</Text>
            <Popover className="child-flex" content={content2}><Text>Protoflio<ChevronDown/></Text></Popover>
            <Popover portalClassName="portal-lg" className="child-flex" content={content}>
            <IoPersonCircleSharp style={{width:"30px",height:"30px"}} />
            <ChevronDown/>
            </Popover>
        </div>
        {/* <div className="dropdown-icon" onClick={dropHandler}>
            <Avatar src="./person.svg" />
            {drop && 
                <Card className="dropdown-card">
                TEST
                </Card>
            }
        </div> */}

        </div>
    )
}

export default NavbarD
