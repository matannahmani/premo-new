import {Card, Grid,Spacer,Text,Image} from '@geist-ui/react';
import { useContext, useRef } from "react"
import { AppContext } from "../context/appcontext"
import Flicking from "@egjs/react-flicking";
import { Fade, AutoPlay } from "@egjs/flicking-plugins";
import Pricecard from '../components/PriceCard';
import DeviceCard from '../components/DeviceCard';


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
            <div className="product-one-shape-5" ></div>
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
                    <DeviceCard title="프리모 도어락" img="./app/smart0.png" key={0}>
                    푸쉬풀 형태의 편리한 스마트 도어락입니다. 언제 어디서나 프리모 앱으로 연결 가능합니다.<br/>
                    1회용 비밀번호 생성 및 발급으로 간편하고 안전한 게스트 패스워드를<br/>
                    </DeviceCard>
                    <DeviceCard title="스마트 허브" img="./app/zwave0.png" key={1}>
                    모든 센서와 도어락을 연결하고 제어할수 있게 도와주는 기기입니다.<br/>
                    집안의 다양한 스마트 디바이스를 연결하고 확장하세요.<br/>
                    </DeviceCard>
                    <DeviceCard title="도어 센서" img="./app/doorsensor0.png" key={2}>
                    창문, 문, 서랍 그리고 금고 등에 간편하게 설치하여 열고 닫힘,
                    비품 관리에 활용할 수 있는 센서입니다.<br/>
                    </DeviceCard>
                    <DeviceCard title="움직임 감지 센서" img="./app/msensor0.png" key={3}>
                    외부 침입으로부터 동작을 감지하는 보안을 제공하는 센서입니다.<br/>
                    스스로 온도 변화를 감지하고 무선 네트워크를 최적화 하여 작동 오류를.
                    </DeviceCard>
                    <DeviceCard title="온습도 센서" img="./app/esensor0.png" key={4}>
                    실내의 온도와 습도를 실시간으로 확인 및 기록할 수 있는 센서입니다.<br/>
                    특정 온도 설정을 통해 비정상적인 온도 감지 시 즉시 알람이 가능합니다.<br/>
                    </DeviceCard>
                    <DeviceCard title="연기 센서" img="./app/ssensor0.png" key={5}>
                    실내 연기(화재, 담배 등)를 실시간으로 감지하여 빠른 조치를 할 수 있도록 도와주는 센서입니다.<br/>
                    프리모 앱을 통해 원격 알람과 제어가 가능하며.
                    </DeviceCard>
                    <DeviceCard title="가스 센서" img="./app/gsensor0.png" key={6}>
                        가스 누설을 감지하고 안전사고를 예방해주는 센서입니다.<br/>
                        노후된 가스의 누수, 가스 렌지 사고, 등 공기 중에 정상범위를 벗어난 유해가스
                        농도를 파악하여 실시간으로 알려줍니다.<br/>
                    </DeviceCard>
                </Flicking>
                <div className="device-card-carousel-dotbar">
                    {[...Array(7).keys()].map((e) => (
                    <div key={e} onClick={() => carousel.current.moveTo(e)} ref={(element) => dotbar.current[e] = element} className={`device-card-carousel-dot ${e === 0 && 'dot-active'}` }></div>
                    ))}
                </div>
                </Card>
                <Spacer y={3}/>
                <Text className="price-section-title" h3>All in one view</Text>
                <Spacer y={1.5}/>
                <div
                style={{ background: 'white', padding: '16px',borderRadius: '16px',boxShadow: '0 5px 10px rgb(0 0 0 / 12%)' }}
                >
                <Pricecard icon="./diamond-i.svg" head={false}>
                <Pricecard.PItem url="https://drive.google.com/file/d/1pBEDEhl2obP3s8tbvgxlIoYY9Ok8eiKT/view" photo={["./app/smart0.png","./app/smart1.png"]} battery="AA Size * 4" size="102 x 102 x 22.45(mm)"
                title="푸쉬풀 형태의 편리한 스마트 도어락입니다." subtitle="프리모 도어락">
                        푸쉬풀 형태의 편리한 스마트 도어락입니다. 언제 어디서나 프리모 앱으로 연결 가능합니다.<br/>
                        1회용 비밀번호 생성 및 발급으로 간편하고 안전한 게스트 패스워드를<br/>
                        생성하고 체크인/아웃을 실시간으로 관리하세요.<br/>
                        청소용 비밀번호 별도 생성이 가능하며 모두의 안전을 위한 보안모드 또한 탑재되어 있습니다.
                        </Pricecard.PItem>
                        <Pricecard.PItem url="https://drive.google.com/file/d/12Tdk4m4sPoud2MbnvJmvIDFTmBHJrxz3/view" photo={["./app/zwave0.png","./app/zwave1.png"]} size="102 x 102 x 22.45(mm)" battery="AA Size * 4"
                        title="모든 센서 & 도어락을 연결하고 제어합니다." subtitle="스마트 허브">
                        모든 센서와 도어락을 연결하고 제어할수 있게 도와주는 기기입니다.<br/>
                        집안의 다양한 스마트 디바이스를 연결하고 확장하세요.<br/>
                        어디에 있든 등록한 다양한 기기를 프리모 앱 하나로 편리하게 사용할 수 있습니다.<br/>
                        숙소를 한눈에 스마트하게 확인하고 제어하세요.<br/>
                        스마트홈 경험은 호스트와 게스트 모두에게 편의와 만족을 제공합니다.
                        </Pricecard.PItem>
                        <Pricecard.PItem size="76 X 36.6 X 16.5 (mm)" battery="3V DC (2 AAA Battery)"
                        title="외부 침입으로부터 동작을 감지하는 보안을 제공합니다." subtitle="도어 센서" photo={["./app/doorsensor0.png","./app/doorsensor1.png"]}>
                        창문, 문, 서랍 그리고 금고 등에 간편하게 설치하여 열고 닫힘,
                        비품 관리에 활용할 수 있는 센서입니다.<br/>
                        접착식으로 누구나 쉽고 빠르게 설치 가능합니다.<br/> 열고,닫힘 확인과 이력조회가 가능합니다.<br/>
                        - 개인실과 다인실의 문, 일반 오피스텔, 주택의 창문 그리고 서랍까지 어디든 쉽게 부착하여
                        활용하세요.
                        </Pricecard.PItem>
                        <Pricecard.PItem title="내부의 온도와 습도를 실시간으로 확인 및 기록할 수 있습니다." subtitle="움직임 감지 센서" size="65 X 65 X 28.5 mm" battery="3V DC (CR123A)" photo={["./app/msensor0.png","./app/msensor1.png"]}>
                            외부 침입으로부터 동작을 감지하는 보안을 제공하는 센서입니다.<br/>
                        스스로 온도 변화를 감지하고 무선 네트워크를 최적화 하여 작동 오류를
                        최소화할 수 있는 센서입니다.<br/>
                        게스트가 머무는 동안 안심하고 머무를수 있는 보안 모드를 제공합니다.<br/>
                        장기간, 장거리 숙소관리에 있어 최고의 보안을 제공합니다.<br/>
                        반려동물의 출입 여부와 안전을 확인할 수 있습니다.<br/>
                        </Pricecard.PItem>
                        <Pricecard.PItem title="창문과 문 등의 열고 닫힘을 확인하여 보안을 강화시킬 수 있습니다." subtitle="온습도 센서" size="65 X 60 X 20.8 (mm)" battery="3V DC (1 CR2450 Button Battery)" photo={["./app/esensor0.png","./app/esensor1.png"]}>
                        실내의 온도와 습도를 실시간으로 확인 및 기록할 수 있는 센서입니다.<br/>
                        특정 온도 설정을 통해 비정상적인 온도 감지 시 즉시 알람이 가능합니다.<br/>
                        게스트 체크인 전 온도 관리로 세심한 배려와 체크아웃 후 낭비되는 에너지를
                        절약까지 쉽고 효율적으로 관리할 수 있습니다.<br/>
                        </Pricecard.PItem>
                        <Pricecard.PItem title="실내 연기(화재, 담배 등)를 감지하여 빠른 조치를 할 수 있도록 도와줍니다." subtitle="연기 센서" size="76 X 36.6 X 16.5 (mm)" battery="3V DC (CR123A)" photo={["./app/ssensor0.png","./app/ssensor1.png"]}>
                        실내 연기(화재, 담배 등)를 실시간으로 감지하여 빠른 조치를 할 수 있도록 도와주는 센서입니다.<br/>
                        프리모 앱을 통해 원격 알람과 제어가 가능하며,
                        어디에서든 상황을 즉시 알 수 있고 조치가 가능합니다.<br/>
                        연기 센서를 통해 숙소 내 흡연 및 화재를 예방하세요.<br/>
                        </Pricecard.PItem>
                        <Pricecard.PItem title="가스 누설을 감지하고 안전사고를 예방합니다." subtitle="가스 센서" size="79 X 68 X 31mm" battery="AA Size * 4" photo={["./app/gsensor0.png","./app/gsensor1.png"]}>
                            가스 누설을 감지하고 안전사고를 예방해주는 센서입니다.<br/>
                        노후된 가스의 누수, 가스 렌지 사고, 등 공기 중에 정상범위를 벗어난 유해가스
                        농도를 파악하여 실시간으로 알려줍니다.<br/>
                        현장에서의 알람 안내와 프리모 앱을 통한 실시간 알람을 통해
                        언제 어디서나 문제 발생 시 빠른 확인과 대처가 가능합니다.<br/>
                        </Pricecard.PItem>
                    </Pricecard>
                </div>
                    <Spacer y={3}/>
            </Grid>
        </Grid.Container>
    )
}

export default device;