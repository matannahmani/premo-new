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
                    style={{ overflow: "hidden" }}
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
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
                        <Pricecard.PItem title="도어 센서"></Pricecard.PItem>
                        <Pricecard.PItem title="움직임 감지 센서"></Pricecard.PItem>
                        <Pricecard.PItem title="온습도 센서"></Pricecard.PItem>
                        <Pricecard.PItem title="연기 센서"></Pricecard.PItem>
                        <Pricecard.PItem title="가스 센서"></Pricecard.PItem>
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
                    style={{ overflow: "hidden" }}
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
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