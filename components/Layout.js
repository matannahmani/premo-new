import {Grid,Text} from '@geist-ui/react'
import {useContext, useEffect,useState} from 'react'
import {AppContext} from '../context/appcontext';
import NavbarM from './Navbarm'
import NavbarD from './Navbard'

const Layout = (props) => {
    const [app,setApp] = useContext(AppContext);

    return (
        <Grid.Container>
          {app.mobile ? <NavbarM/> : <NavbarD/>}
          <div id="page-wrap">

          {props.children}
          </div>
        </Grid.Container>
    )
}

export default Layout