import { Button } from '@geist-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import {useState} from 'react';
import Pricecard from './PriceCard';
const Tabs = () => {
    const [tab,setTab] = useState(0);

    return (
        <div className="tabs">
            <header className="tabs-header">
            <Button onClick={() => setTab(0)} size="small" className={`${tab === 0 && 'tab-active'} tab-btn`}>스탠다드</Button>
            <Button onClick={() => setTab(1)} size="small" className={`${tab === 1 && 'tab-active'} tab-btn`}>스마트</Button>
            </header>
            <div className="content">
                {/* {children} */}
                <AnimatePresence exitBeforeEnter>
                {tab === 0 && 
                (
                    <motion.div
                    key="tab1"
                    style={{ overflow: "hidden",borderRadius: '16px',boxShadow: '0 5px 10px rgb(0 0 0 / 12%)' }}
                    initial={{ height: 20 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 20 }}
                    transition={{ duration: 0.5 }}>
                        <Pricecard icon="./diamond-i.svg" title="프리미엄 패키지" oprice="75,000원" price={"월 44,900원 / 2년"}>
                        <Pricecard.PItem url="https://drive.google.com/file/d/1pBEDEhl2obP3s8tbvgxlIoYY9Ok8eiKT/view" photo={["./app/smart0.png","./app/smart1.png"]} battery="AA Size * 4" size="102 x 102 x 22.45(mm)" title="프리모 도어락">
                        푸쉬풀 형태의 편리한 스마트 도어락입니다. 언제 어디서나 프리모 앱으로 연결 가능합니다.<br/>
                        1회용 비밀번호 생성 및 발급으로 간편하고 안전한 게스트 패스워드를<br/>
                        생성하고 체크인/아웃을 실시간으로 관리하세요.<br/>
                        청소용 비밀번호 별도 생성이 가능하며 모두의 안전을 위한 보안모드 또한 탑재되어 있습니다.
                        </Pricecard.PItem>
                        <Pricecard.PItem url="https://drive.google.com/file/d/12Tdk4m4sPoud2MbnvJmvIDFTmBHJrxz3/view" photo={["./app/zwave0.png","./app/zwave1.png"]} size="102 x 102 x 22.45(mm)" battery="AA Size * 4" title="스마트 허브">
                        모든 센서와 도어락을 연결하고 제어할수 있게 도와주는 기기입니다.<br/>
                        집안의 다양한 스마트 디바이스를 연결하고 확장하세요.<br/>
                        어디에 있든 등록한 다양한 기기를 프리모 앱 하나로 편리하게 사용할 수 있습니다.<br/>
                        숙소를 한눈에 스마트하게 확인하고 제어하세요.<br/>
                        스마트홈 경험은 호스트와 게스트 모두에게 편의와 만족을 제공합니다.
                        </Pricecard.PItem>
                        <Pricecard.PItem size="76 X 36.6 X 16.5 (mm)" battery="3V DC (2 AAA Battery)" title="도어 센서" photo={["./app/doorsensor0.png","./app/doorsensor1.png"]}>
                        창문, 문, 서랍 그리고 금고 등에 간편하게 설치하여 열고 닫힘,
                        비품 관리에 활용할 수 있는 센서입니다.<br/>
                        접착식으로 누구나 쉽고 빠르게 설치 가능합니다.<br/> 열고,닫힘 확인과 이력조회가 가능합니다.<br/>
                        - 개인실과 다인실의 문, 일반 오피스텔, 주택의 창문 그리고 서랍까지 어디든 쉽게 부착하여
                        활용하세요.
                        </Pricecard.PItem>
                        <Pricecard.PItem title="움직임 감지 센서" size="65 X 65 X 28.5 mm" battery="3V DC (CR123A)" photo={["./app/msensor0.png","./app/msensor1.png"]}>
                        외부 침입으로부터 동작을 감지하는 보안을 제공하는 센서입니다.<br/>
                        스스로 온도 변화를 감지하고 무선 네트워크를 최적화 하여 작동 오류를
                        최소화할 수 있는 센서입니다.<br/>
                        게스트가 머무는 동안 안심하고 머무를수 있는 보안 모드를 제공합니다.<br/>
                        장기간, 장거리 숙소관리에 있어 최고의 보안을 제공합니다.<br/>
                        반려동물의 출입 여부와 안전을 확인할 수 있습니다.<br/>
                        </Pricecard.PItem>
                        <Pricecard.PItem title="온습도 센서" size="65 X 60 X 20.8 (mm)" battery="3V DC (1 CR2450 Button Battery)" photo={["./app/esensor0.png","./app/esensor1.png"]}>
                        실내의 온도와 습도를 실시간으로 확인 및 기록할 수 있는 센서입니다.<br/>
                        특정 온도 설정을 통해 비정상적인 온도 감지 시 즉시 알람이 가능합니다.<br/>
                        게스트 체크인 전 온도 관리로 세심한 배려와 체크아웃 후 낭비되는 에너지를
                        절약까지 쉽고 효율적으로 관리할 수 있습니다.<br/>
                        </Pricecard.PItem>
                        <Pricecard.PItem title="연기 센서" size="76 X 36.6 X 16.5 (mm)" battery="3V DC (CR123A)" photo={["./app/ssensor0.png","./app/ssensor1.png"]}>
                        실내 연기(화재, 담배 등)를 실시간으로 감지하여 빠른 조치를 할 수 있도록 도와주는 센서입니다.<br/>
                        프리모 앱을 통해 원격 알람과 제어가 가능하며,
                        어디에서든 상황을 즉시 알 수 있고 조치가 가능합니다.<br/>
                        연기 센서를 통해 숙소 내 흡연 및 화재를 예방하세요.<br/>
                        </Pricecard.PItem>
                        <Pricecard.PItem title="가스 센서" size="79 X 68 X 31mm" battery="AA Size * 4" photo={["./app/gsensor0.png","./app/gsensor1.png"]}>
                        가스 누설을 감지하고 안전사고를 예방해주는 센서입니다.<br/>
                        노후된 가스의 누수, 가스 렌지 사고, 등 공기 중에 정상범위를 벗어난 유해가스
                        농도를 파악하여 실시간으로 알려줍니다.<br/>
                        현장에서의 알람 안내와 프리모 앱을 통한 실시간 알람을 통해
                        언제 어디서나 문제 발생 시 빠른 확인과 대처가 가능합니다.<br/>
                        </Pricecard.PItem>
                        <Pricecard.UItem>Premo 어플리케이션</Pricecard.UItem>
                        <Pricecard.UItem>호텔식 청소 서비스 및 비품 관리</Pricecard.UItem>
                        <Pricecard.UItem>체크인/체크아웃 자동화</Pricecard.UItem>
                        <Pricecard.UItem>게스트 예약관리</Pricecard.UItem>
                        <Pricecard.UItem>출입 내역 관리</Pricecard.UItem>
                        <Pricecard.UItem>일회용 비밀번호 발급</Pricecard.UItem>
                        <Pricecard.UItem>원거리 도어락 제어</Pricecard.UItem>
                        <Pricecard.UItem>원거리 도어락 & 디바이스 제어</Pricecard.UItem>
                        <Pricecard.UItem>보안 모드 활성화를 통한 위험상황 감지</Pricecard.UItem>
                    </Pricecard>
                    </motion.div>
                )}
                {tab === 1 &&
                (
                    <motion.div
                    key="tab2"
                    style={{ overflow: "hidden",borderRadius: '16px',boxShadow: '0 5px 10px rgb(0 0 0 / 12%)' }}
                    initial={{ height: 20 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 20 }}
                    transition={{ duration: 0.5 }}>
                        <Pricecard icon={"./king-i.svg"} title="스탠다드 패키지" oprice="40,000원" price={"월 24,900원 / 1년"}>
                        <Pricecard.PItem url="https://drive.google.com/file/d/1pBEDEhl2obP3s8tbvgxlIoYY9Ok8eiKT/view" photo={["./app/smart0.png","./app/smart1.png"]} battery="AA Size * 4" size="102 x 102 x 22.45(mm)" title="프리모 도어락">
                        푸쉬풀 형태의 편리한 스마트 도어락입니다. 언제 어디서나 프리모 앱으로 연결 가능합니다.<br/>
                        1회용 비밀번호 생성 및 발급으로 간편하고 안전한 게스트 패스워드를<br/>
                        생성하고 체크인/아웃을 실시간으로 관리하세요.<br/>
                        청소용 비밀번호 별도 생성이 가능하며 모두의 안전을 위한 보안모드 또한 탑재되어 있습니다.
                        </Pricecard.PItem>
                        <Pricecard.PItem style={{background: 'white'}} url="https://drive.google.com/file/d/12Tdk4m4sPoud2MbnvJmvIDFTmBHJrxz3/view" photo={["./app/zwave0.png","./app/zwave1.png"]} size="102 x 102 x 22.45(mm)" battery="AA Size * 4" title="스마트 허브">
                        모든 센서와 도어락을 연결하고 제어할수 있게 도와주는 기기입니다.<br/>
                        집안의 다양한 스마트 디바이스를 연결하고 확장하세요.<br/>
                        어디에 있든 등록한 다양한 기기를 프리모 앱 하나로 편리하게 사용할 수 있습니다.<br/>
                        숙소를 한눈에 스마트하게 확인하고 제어하세요.<br/>
                        스마트홈 경험은 호스트와 게스트 모두에게 편의와 만족을 제공합니다.
                        </Pricecard.PItem>
                        <Pricecard.UItem>Premo 어플리케이션</Pricecard.UItem>
                        <Pricecard.UItem>호텔식 청소 서비스 및 비품 관리</Pricecard.UItem>
                        <Pricecard.UItem>체크인/체크아웃 자동화</Pricecard.UItem>
                        <Pricecard.UItem>게스트 예약관리</Pricecard.UItem>
                        <Pricecard.UItem>출입 내역 관리</Pricecard.UItem>
                        <Pricecard.UItem>일회용 비밀번호 발급</Pricecard.UItem>
                        <Pricecard.UItem>원거리 도어락 제어</Pricecard.UItem>
                    </Pricecard>
                    </motion.div>
                )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Tabs;