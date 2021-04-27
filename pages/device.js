import {Card, Grid,Spacer,Text} from '@geist-ui/react';
import { useContext, useRef } from "react"
import { AppContext } from "../context/appcontext"
import Flicking from "@egjs/react-flicking";
import { Fade, AutoPlay } from "@egjs/flicking-plugins";
import Pricecard from '../components/PriceCard';
import DeviceCard from '../components/DeviceCard';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next';


const device = () => {
    const [mobile,] = useContext(AppContext);
    const {t} = useTranslation('price')
    const plugins = [new Fade(), new AutoPlay(2000, "NEXT")];
    const dotbar = useRef(new Array())
    const carousel = useRef();
    const moveHandler = (e) => {
        dotbar.current.forEach (i => i.classList.remove('dot-active'))
        dotbar.current[e].classList.add('dot-active')
    }
    return (
        <Grid.Container justify="center" className="price-section">
            <div className="product-one-shape-5" ></div>
            <div className="product-one-shape-5 top left"></div>
            <div className="product-one-shape-5 bottom left"></div>
            <div className="product-one-shape-5 bottom right"></div>
            <Grid xs={24} sm={18} md={12} lg={12} xl={6} style={{minHeight: '940px',alignItems: 'center'}} direction="column">
                <Spacer y={3}/>
                <Text className="price-section-title" h1>{t('deviceheader')}</Text>
                <Spacer y={3}/>
                <Card className="device-card" shadow>
                <Flicking
                tag = "div"
                viewportTag = "div"
                cameraTag = "div"
                classPrefix = "eg-flick"
                deceleration = {0.0075}
                onChange = {((e) => moveHandler(e.index))}
                horizontal = {true}
                circular = {true}
                infinite = {false}
                infiniteThreshold = {0}
                lastIndex = {Infinity}
                threshold = {40}
                panelEffect = {x => 1 - Math.pow(1 - x, 3)}
                defaultIndex = {0}
                inputType = {["touch", "mouse"]}
                thresholdAngle = {45}
                bounce = {10}
                duration={500}
                ref={carousel}
                autoResize = {true}
                adaptive = {true}
                zIndex = {2000}
                bound = {false}
                overflow = {false}
                hanger = {"50%"}
                anchor = {"50%"}
                plugins={plugins}
                gap = {0}
                moveType = {{type: "snap", count: 1}}
                >
                    <DeviceCard title={t('tab-sb0')} img="./app/smart0.png" key={0}>
                    {t('tab-p0').split('\n')[0] + t('tab-p0').split('\n')[1]}
                    </DeviceCard>
                    <DeviceCard title={t('tab-sb1')} img="./app/zwave0.png" key={1}>
                    {t('tab-p1').split('\n')[0] + t('tab-p1').split('\n')[1]}
                    </DeviceCard>
                    <DeviceCard title={t('tab-sb2')} img="./app/doorsensor0.png" key={2}>
                    {t('tab-p2').split('\n')[0] + t('tab-p2').split('\n')[1]}
                    </DeviceCard>
                    <DeviceCard title={t('tab-sb3')} img="./app/msensor0.png" key={3}>
                    {t('tab-p3').split('\n')[0] + t('tab-p3').split('\n')[1]}
                    </DeviceCard>
                    <DeviceCard title={t('tab-sb4')} img="./app/esensor0.png" key={4}>
                    {t('tab-p4').split('\n')[0] + t('tab-p4').split('\n')[1]}
                    </DeviceCard>
                    <DeviceCard title={t('tab-sb5')} img="./app/ssensor0.png" key={5}>
                    {t('tab-p5').split('\n')[0] + t('tab-p5').split('\n')[1]}
                    </DeviceCard>
                    <DeviceCard title={t('tab-sb6')} img="./app/gsensor0.png" key={6}>
                    {t('tab-p6').split('\n')[0] + t('tab-p6').split('\n')[1]}
                    </DeviceCard>
                </Flicking>
                <div className="device-card-carousel-dotbar">
                    {[...Array(7).keys()].map((e) => (
                    <div key={e} onClick={() => carousel.current.moveTo(e)} ref={(element) => dotbar.current[e] = element} className={`device-card-carousel-dot ${e === 0 && 'dot-active'}` }></div>
                    ))}
                </div>
                </Card>
                <Spacer y={3}/>
                <Text className="price-section-title" h3>{t('allinone')}</Text>
                <Spacer y={1.5}/>
                <div
                style={{ background: 'white', padding: '16px',borderRadius: '16px',boxShadow: '0 5px 10px rgb(0 0 0 / 12%)' }}
                >
                <Pricecard icon="./diamond-i.svg" head={false}>
                        <Pricecard.PItem title={t('tab-p0').split('\n')[0]} url="https://drive.google.com/file/d/1pBEDEhl2obP3s8tbvgxlIoYY9Ok8eiKT/view" photo={["./app/smart0.png","./app/smart1.png"]} battery="AA Size * 4" size="102 x 102 x 22.45(mm)" subtitle={t('tab-sb0')}>
                        {t('tab-p0')}
                        </Pricecard.PItem>
                        <Pricecard.PItem title={t('tab-p1').split('\n')[0]} url="https://drive.google.com/file/d/12Tdk4m4sPoud2MbnvJmvIDFTmBHJrxz3/view" photo={["./app/zwave0.png","./app/zwave1.png"]} size="102 x 102 x 22.45(mm)" battery="AA Size * 4" subtitle={t('tab-sb1')}>
                        {t('tab-p1')}
                        </Pricecard.PItem>
                        <Pricecard.PItem title={t('tab-p2').split('\n')[0]} size="76 X 36.6 X 16.5 (mm)" url="https://drive.google.com/file/d/1CpikwJLgiLOlgujbtRTZXpWg75FlTtX7/view" battery="3V DC (2 AAA Battery)" subtitle={t('tab-sb2')} photo={["./app/doorsensor0.png","./app/doorsensor1.png"]}>
                        {t('tab-p2')}
                        </Pricecard.PItem>
                        <Pricecard.PItem title={t('tab-p3').split('\n')[0]} subtitle={t('tab-sb3')} url="https://drive.google.com/file/d/1-jAY31a3wYuWzpz7qGE0fwEcOTDSH5hQ/view" size="65 X 65 X 28.5 mm" battery="3V DC (CR123A)" photo={["./app/msensor0.png","./app/msensor1.png"]}>
                        {t('tab-p3')}
                        </Pricecard.PItem>
                        <Pricecard.PItem title={t('tab-p4').split('\n')[0]} subtitle={t('tab-sb4')} url="https://drive.google.com/file/d/1KJHVQcGe0weWL5ef34t-gRxv4j34ptoh/view" size="65 X 60 X 20.8 (mm)" battery="3V DC (1 CR2450 Button Battery)" photo={["./app/esensor0.png","./app/esensor1.png"]}>
                        {t('tab-p4')}
                        </Pricecard.PItem>
                        <Pricecard.PItem title={t('tab-p5').split('\n')[0]} subtitle={t('tab-sb5')} url="https://drive.google.com/file/d/1fi-KOWsZwQdYefQVk0CraCUE-7jXC_DQ/view" size="76 X 36.6 X 16.5 (mm)" battery="3V DC (CR123A)" photo={["./app/ssensor0.png","./app/ssensor1.png"]}>
                        {t('tab-p5')}
                        </Pricecard.PItem>
                        <Pricecard.PItem title={t('tab-p6').split('\n')[0]} subtitle={t('tab-sb6')} url="https://drive.google.com/file/d/1TZEUqglxpwBOZfV7W7eEy7avvdObOkKq/view" size="79 X 68 X 31mm" battery="AA Size * 4" photo={["./app/gsensor0.png","./app/gsensor1.png"]}>
                        {t('tab-p6')}
                        </Pricecard.PItem>
                        
                    </Pricecard>
                </div>
                    <Spacer y={3}/>
            </Grid>
        </Grid.Container>
    )
}

export const getStaticProps = async ({ locale }) => ({
    props: {
      ...await serverSideTranslations(locale, ['price']),
    },
  })
export default device;

<Pricecard.PItem title="가스 누설을 감지하고 안전사고를 예방합니다." subtitle="가스 센서" size="79 X 68 X 31mm" battery="AA Size * 4" photo={["./app/gsensor0.png","./app/gsensor1.png"]}>
가스 누설을 감지하고 안전사고를 예방해주는 센서입니다.<br/>
노후된 가스의 누수, 가스 렌지 사고, 등 공기 중에 정상범위를 벗어난 유해가스
농도를 파악하여 실시간으로 알려줍니다.<br/>
현장에서의 알람 안내와 프리모 앱을 통한 실시간 알람을 통해
언제 어디서나 문제 발생 시 빠른 확인과 대처가 가능합니다.<br/>
</Pricecard.PItem>