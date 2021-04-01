import {Card, Grid,Spacer,Text,Image} from '@geist-ui/react';
import { useContext, useRef } from "react"
import { AppContext } from "../context/appcontext"
import Flicking from "@egjs/react-flicking";
import { Fade, AutoPlay } from "@egjs/flicking-plugins";
import Pricecard from '../components/PriceCard';


const device = () => {
    const [mobile,] = useContext(AppContext);
    const plugins = [new Fade(), new AutoPlay(2000, "NEXT")];
    const dotbar = useRef(new Array())
    const carousel = useRef();
    const moveHandler = (e) => {
        dotbar.current.forEach (i => i.classList.remove('dot-active'))
        dotbar.current[e].classList.add('dot-active')
    }
    return (
        <Grid.Container justify="center" className="price-section">
            <div className="product-one-shape-5"></div>
            <div className="product-one-shape-5 top left"></div>
            <div className="product-one-shape-5 bottom left"></div>
            <div className="product-one-shape-5 bottom right"></div>
            <Grid xs={24} sm={18} md={12} lg={12} xl={6} style={{minHeight: '940px',alignItems: 'center'}} direction="column">
                <Spacer y={3}/>
                <Text className="price-section-title" h1>호스트의 시간과 비용을 절약해주고 게스트에게는 높은 만족을 줍니다.</Text>
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
                    {[...Array(3).keys()].map((e) => (
                        <div className="device-card-carousel-item" key={e}>
                            <Image src={`app/${e}.png`}/>
                            <Spacer/>
                            <Text h3>Smoke Sensor</Text>
                            <Text p>비닐 스트랩을 제거한 본체의 가운데 위치한 네트워킹 센서를
                                    1.5초내 3회 빠르게 눌러줍니다.
                                    - 30초 이내 녹색 LED가 깜빡이며 앱 화면에 ‘네트워킹 성공'이표시됩니다.
                            </Text>
                        </div>
                    ))
                    }
                </Flicking>
                <div className="device-card-carousel-dotbar">
                    {[...Array(3).keys()].map((e) => (
                    <div key={e} onClick={() => carousel.current.moveTo(e)} ref={(element) => dotbar.current[e] = element} className={`device-card-carousel-dot ${e === 0 && 'dot-active'}` }></div>
                    ))}
                </div>
                </Card>
                <Spacer y={3}/>
                <Text className="price-section-title" h3>All in one view</Text>
                <Spacer y={1.5}/>
                <Pricecard icon="./diamond-i.svg" head={false}>
                        <Pricecard.PItem subtitle="test" url="https://drive.google.com/file/d/1pBEDEhl2obP3s8tbvgxlIoYY9Ok8eiKT/view" photo={["./app/smart0.png","./app/smart1.png"]} battery="AA Size * 4" size="102 x 102 x 22.45(mm)" title="프리모 도어락">
                        푸쉬풀 형태의 편리한 스마트 도어락입니다. 언제 어디서나 프리모 앱으로 연결 가능합니다.<br/>
                        1회용 비밀번호 생성 및 발급으로 간편하고 안전한 게스트 패스워드를<br/>
                        생성하고 체크인/아웃을 실시간으로 관리하세요.<br/>
                        청소용 비밀번호 별도 생성이 가능하며 모두의 안전을 위한 보안모드 또한 탑재되어 있습니다.
                        </Pricecard.PItem>
                        <Pricecard.PItem subtitle="test" url="https://drive.google.com/file/d/12Tdk4m4sPoud2MbnvJmvIDFTmBHJrxz3/view" photo={["./app/zwave0.png","./app/zwave1.png"]} size="102 x 102 x 22.45(mm)" battery="AA Size * 4" title="스마트 허브">
                        모든 센서와 도어락을 연결하고 제어할수 있게 도와주는 기기입니다.<br/>
                        집안의 다양한 스마트 디바이스를 연결하고 확장하세요.<br/>
                        어디에 있든 등록한 다양한 기기를 프리모 앱 하나로 편리하게 사용할 수 있습니다.<br/>
                        숙소를 한눈에 스마트하게 확인하고 제어하세요.<br/>
                        스마트홈 경험은 호스트와 게스트 모두에게 편의와 만족을 제공합니다.
                        </Pricecard.PItem>
                        <Pricecard.PItem subtitle="test" title="움직임감지 센서"></Pricecard.PItem>
                        <Pricecard.PItem subtitle="test" title="움직임 감지 센서"></Pricecard.PItem>
                        <Pricecard.PItem subtitle="test" title="온습도 센서"></Pricecard.PItem>
                        <Pricecard.PItem subtitle="test" title="연기 센서"></Pricecard.PItem>
                        <Pricecard.PItem subtitle="test" title="가스 센서"></Pricecard.PItem>
                    </Pricecard>
                    <Spacer y={3}/>
            </Grid>
        </Grid.Container>
    )
}

export default device;