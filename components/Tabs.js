import { Button } from '@geist-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import {useState} from 'react';
import Pricecard from './PriceCard';
const Tabs = ({t}) => {
    const [tab,setTab] = useState(0);
    return (
        <div id='tabs' className="card-tabs tabs">
            <header className="tabs-header">
            <Button onClick={() => setTab(0)} size="small" className={`${tab === 0 && 'tab-active'} tab-btn`}>{t('tab-btn-p')}</Button>
            <Button onClick={() => setTab(1)} size="small" className={`${tab === 1 && 'tab-active'} tab-btn`}>{t('tab-btn-s')}</Button>
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
                        <Pricecard icon="./diamond-i.svg" title={t('tab-btn-p') + ' ' + t('package')} oprice={t('tab-btn-p-price0')} price={t('tab-btn-p-price1')}>
                        <Pricecard.PItem url="https://drive.google.com/file/d/1pBEDEhl2obP3s8tbvgxlIoYY9Ok8eiKT/view" photo={["./app/smart0.png","./app/smart1.png"]} battery="AA Size * 4" size="102 x 102 x 22.45(mm)" title={t('tab-sb0')}>
                        {t('tab-p0')}
                        </Pricecard.PItem>
                        <Pricecard.PItem url="https://drive.google.com/file/d/12Tdk4m4sPoud2MbnvJmvIDFTmBHJrxz3/view" photo={["./app/zwave0.png","./app/zwave1.png"]} size="102 x 102 x 22.45(mm)" battery="AA Size * 4" title={t('tab-sb1')}>
                        {t('tab-p1')}
                        </Pricecard.PItem>
                        <Pricecard.PItem size="76 X 36.6 X 16.5 (mm)" url="https://drive.google.com/file/d/1CpikwJLgiLOlgujbtRTZXpWg75FlTtX7/view" battery="3V DC (2 AAA Battery)" title={t('tab-sb2')} photo={["./app/doorsensor0.png","./app/doorsensor1.png"]}>
                        {t('tab-p2')}
                        </Pricecard.PItem>
                        <Pricecard.PItem title={t('tab-sb3')} url="https://drive.google.com/file/d/1-jAY31a3wYuWzpz7qGE0fwEcOTDSH5hQ/view" size="65 X 65 X 28.5 mm" battery="3V DC (CR123A)" photo={["./app/msensor0.png","./app/msensor1.png"]}>
                        {t('tab-p3')}
                        </Pricecard.PItem>
                        <Pricecard.PItem title={t('tab-sb4')} url="https://drive.google.com/file/d/1KJHVQcGe0weWL5ef34t-gRxv4j34ptoh/view" size="65 X 60 X 20.8 (mm)" battery="3V DC (1 CR2450 Button Battery)" photo={["./app/esensor0.png","./app/esensor1.png"]}>
                        {t('tab-p4')}
                        </Pricecard.PItem>
                        <Pricecard.PItem title={t('tab-sb5')} url="https://drive.google.com/file/d/1fi-KOWsZwQdYefQVk0CraCUE-7jXC_DQ/view" size="76 X 36.6 X 16.5 (mm)" battery="3V DC (CR123A)" photo={["./app/ssensor0.png","./app/ssensor1.png"]}>
                        {t('tab-p5')}
                        </Pricecard.PItem>
                        <Pricecard.PItem title={t('tab-sb6')} url="https://drive.google.com/file/d/1TZEUqglxpwBOZfV7W7eEy7avvdObOkKq/view" size="79 X 68 X 31mm" battery="AA Size * 4" photo={["./app/gsensor0.png","./app/gsensor1.png"]}>
                        {t('tab-p6')}
                        </Pricecard.PItem>
                        <Pricecard.UItem>{t('tab-sb7')}</Pricecard.UItem>
                        <Pricecard.UItem>{t('tab-sb8')}</Pricecard.UItem>
                        <Pricecard.UItem>{t('tab-sb9')}</Pricecard.UItem>
                        <Pricecard.UItem>{t('tab-sb10')}</Pricecard.UItem>
                        <Pricecard.UItem>{t('tab-sb11')}</Pricecard.UItem>
                        <Pricecard.UItem>{t('tab-sb12')}</Pricecard.UItem>
                        <Pricecard.UItem>{t('tab-sb13')}</Pricecard.UItem>
                        <Pricecard.UItem>{t('tab-sb14')}</Pricecard.UItem>
                        <Pricecard.UItem>{t('tab-sb15')}</Pricecard.UItem>
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
                        <Pricecard standard icon={"./king-i.svg"} title={t('tab-btn-s') + ' ' + t('package')} oprice={t('tab-btn-s-price0')} price={t('tab-btn-s-price1')}>
                        <Pricecard.PItem url="https://drive.google.com/file/d/1pBEDEhl2obP3s8tbvgxlIoYY9Ok8eiKT/view" photo={["./app/smart0.png","./app/smart1.png"]} battery="AA Size * 4" size="102 x 102 x 22.45(mm)" title="프리모 도어락">
                            {t('tab-p0')}
                        </Pricecard.PItem>
                        <Pricecard.PItem style={{background: 'white'}} url="https://drive.google.com/file/d/12Tdk4m4sPoud2MbnvJmvIDFTmBHJrxz3/view" photo={["./app/zwave0.png","./app/zwave1.png"]} size="102 x 102 x 22.45(mm)" battery="AA Size * 4" title="스마트 허브">
                        {t('tab-p1')}
                        </Pricecard.PItem>
                        <Pricecard.UItem>{t('tab-sb7')}</Pricecard.UItem>
                        <Pricecard.UItem>{t('tab-sb8')}</Pricecard.UItem>
                        <Pricecard.UItem>{t('tab-sb9')}</Pricecard.UItem>
                        <Pricecard.UItem>{t('tab-sb10')}</Pricecard.UItem>
                        <Pricecard.UItem>{t('tab-sb11')}</Pricecard.UItem>
                        <Pricecard.UItem>{t('tab-sb12')}</Pricecard.UItem>
                        <Pricecard.UItem>{t('tab-sb13')}</Pricecard.UItem>
                        <Pricecard.UItem>{t('tab-sb14')}</Pricecard.UItem>
                        <Pricecard.UItem>{t('tab-sb15')}</Pricecard.UItem>
                    </Pricecard>
                    </motion.div>
                )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Tabs;