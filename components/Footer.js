import { Button, Grid, Image, Spacer, Text } from "@geist-ui/react";

const Footer = () => {

    return (
        <Grid.Container justify="center" className="footer" direction="row">
            <Grid xs={12} direction="column" justify="space-evenly">
            <Spacer/>
            <Image src="logo-main.svg" width={120} height={24}/>
                <div>
                <Text className="footer-premo-loc" p style={{fontSize: '12px'}}>
                    
                {/* Mutual : Corporation KeyweSmartLock
                <Spacer y={0}/>
                Representative : Kim Do Hyun
                <Spacer y={0}/>
                Tel : 02-6953-6807
                <Spacer y={0}/>
                Address :
                <Spacer y={0}/>
                21-8, Dokmak-ro 15-gil, Mapo-gu, Seoul
                <Spacer y={0}/>
                Email : Info@premo.live
                <Spacer y={0}/>
                Business Number :
                <Spacer y={0}/>
                123-87-01244
                <Spacer y={0}/>
                Copyright ⓒ
                <Spacer y={0}/>
                premo all right Reserved */ }
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
                    <Button onClick={() => window.open('https://play.google.com/store/apps/details?id=com.keywe.premo')} className="appstore-btn" icon={<Image src="./icons/playstore-logo.png" width={16} height={16}/>} shadow type="secondary">Play Store</Button>
                    <Spacer/>
                    <Button onClick={() => window.open('https://apps.apple.com/app/id1538085877')} className="appstore-btn" icon={<Image src="./icons/apple-logo.png" width={16} height={16}/>} shadow type="secondary">App Store</Button>
                    <Spacer/>
            </Grid>
        </Grid.Container>
    )
}
export default Footer;