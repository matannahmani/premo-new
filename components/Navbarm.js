import { slide as Menu } from 'react-burger-menu'
import { Button, Text, Image} from '@geist-ui/react'
import { Menu as MenuIcon } from '@geist-ui/react-icons'
import ActiveLink from './ActiveLink'

const Navbarm = (props) => {

    return (
        <div className="navbar navbar-mobile">
        <Menu width={"240px"} customBurgerIcon={<MenuIcon/>} right pageWrapId={ "page-wrap" } outerContainerId={"__next"}>
        <ActiveLink href="/price">
        <Text>{props.t('pricing')}</Text>
        </ActiveLink>
        <ActiveLink href="/device">
        <Text>{props.t('device')}</Text>
        </ActiveLink>
        <ActiveLink href="/premozone">
        <Text>{props.t('premozone')}</Text>
        </ActiveLink>
        <span style={{border: '1px solid #D5D6D5',margin: '16px 0px'}}></span>
        {!props.user.logged ?
            <ActiveLink  href="/login"><span>{props.t('premoLogin')}</span></ActiveLink>
        :
          <>
            <ActiveLink href="/user/payment">
            <Text>{props.t('payment')}</Text>
            </ActiveLink>
            <ActiveLink href="/user/profile">
            <Text>{props.t('account')}</Text>
            </ActiveLink>
            <ActiveLink href="/" logout><span onClick={props.logoutHandler}>{props.t('logout')}</span></ActiveLink>
        </>
        }
        </Menu>
        <Button auto size="small" onClick={props.setCalendly} className="bookbtn">{props.t('bookconsultation')}</Button>
        <ActiveLink href="/">
        <Image src="/logo-short.svg" width={60} height={60}/>
        </ActiveLink>
        </div>
    )
}

export default Navbarm