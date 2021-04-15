import { Grid, Image, Spacer, Text } from "@geist-ui/react";
import Appstore from '../public/icons/appstore.svg'
import Playstore from '../public/icons/googleplay.svg'
const Footer = () => {

    return (
        <Grid.Container justify="center" className="footer" direction="row">
            <Grid xs={12} direction="column" justify="space-evenly">
            <Spacer/>
            <Image src="/logo-main.svg" width={120} height={24}/>
                <div>
                <Text className="footer-premo-loc" p style={{fontSize: '12px'}}>
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
            </Grid>
            <Grid className="footer-links" direction="column">
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