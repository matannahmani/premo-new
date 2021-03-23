import {Grid,Text} from '@geist-ui/react'
import {useEffect,useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavbarM from './Navbarm'
import NavbarD from './Navbard'

const Layout = (props) => {
    const [mobile,setMobile] = useState(false);
    const [menu,setMenu] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
          const handleResize = () => {
            // Set window width/height to state
            if (window.innerWidth < 900)
              setMobile(true)
            else
            {
              setMobile(false)
              setMenu(true)
            }
          }
          // Add event listener
          window.addEventListener("resize", handleResize);
          // Call handler right away so state gets updated with initial window size
          handleResize();
          // Remove event listener on cleanup
        }
      }, [])
    return (
        <Grid.Container style={{height: '100vh'}}>
          {mobile ? <NavbarM/> : <NavbarD/>}
          <div id="page-wrap">

          {props.children}
          </div>
        </Grid.Container>
    )
}

export default Layout