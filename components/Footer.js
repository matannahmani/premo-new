import { Grid, Image, Spacer, Text } from "@geist-ui/react";
import Appstore from '../public/icons/appstore.svg'
import Playstore from '../public/icons/googleplay.svg'
import { useRouter } from 'next/router'
import LangChange from "./LangChange";
import { useContext } from "react";
import { AppContext } from "../context/appcontext";
import { Facebook, Instagram } from "@geist-ui/react-icons";
import Link from "next/link";
const Footer = () => {
    const router = useRouter()
    const app = useContext(AppContext);

    return (
        <Grid.Container justify="center" className="footer" direction="row">
            <Grid style={{position: 'relative'}} xs={12} direction="column" justify="space-evenly">
            <Spacer/>
            <Image src="/logo-main.svg" width={120} height={24}/>
                <div style={{display: 'flex',flexWrap: 'wrap'}}>
                    <div>
                    <Text className="footer-premo-loc" p style={{fontSize: '12px',color: "#333333"}}>
                    상호 : 주식회사 키위스마트락
                    <Spacer y={0}/>
                    대표자 : 김도현
                    <Spacer y={0}/>
                    전화 : 02-6953-6807
                    <Spacer y={0}/>
                    주소 : 서울특별시 마포구 독막로 15길 21-8
                    <Spacer y={0}/>
                    이메일 : Info@premo.live
                    <Spacer y={0}/>
                    사업자 번호 : 123-87-01244
                    <Spacer y={0}/>
                    Copyright ⓒ premo all right Reserved
                    <Spacer y={0}/>
                    </Text>
                    </div>
                    <div style={{display: 'flex',flexDirection: 'column',alignItems: 'center',flex: '0 0',width: '100%'}}>
                    <LangChange/>
                    <Spacer/>
                    <Link href="/faq">
                    <Text style={{cursor: 'pointer',color: "#333333"}} span b>FAQ</Text>
                    </Link>
                    <Spacer/>
                    <div style={{display: 'flex',justifyContent: 'space-evenly',width: '100%',color: "#333333"}}>
                    <a className="link" target="_blank" href="https://www.instagram.com/premo.kr/">
                    <Instagram/>
                    </a>
                    <a className="link" target="_blank" href="https://www.facebook.com/Premo.solution">
                    <Facebook/>
                    </a>
                    <a className="link" target="_blank" href="https://keyweshop.imweb.me/">
                    <Image className="m0" src="keywe-icon.png" width={24} height={24}/>
                    </a>
                    </div>
                    </div>
                </div>
            </Grid>
            <Grid className="footer-links" justify="flex-start" direction="column">
                    <Text className="footer-text" >Download Premo</Text>
                    <Spacer/>
                    <button className="store-btn" onClick={() => window.open('https://play.google.com/store/apps/details?id=com.keywe.premo')} ><Playstore/></button>
                    <Spacer/>
                    <button className="store-btn" onClick={() => window.open('https://apps.apple.com/app/id1538085877')} ><Appstore/></button>
                    <Spacer/>
            </Grid>
        </Grid.Container>
    )
}
export default Footer;