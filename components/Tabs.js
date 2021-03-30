import { Button } from '@geist-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import {useState} from 'react';
import Pricecard from './PriceCard';
const Tabs = ({title,children}) => {
    const [tab,setTab] = useState(0);

    return (
        <div className="tabs">
            <header className="tabs-header">
            <Button onClick={() => setTab(0)} size="small" className={`${tab === 0 && 'tab-active'} tab-btn`}>test</Button>
            <Button onClick={() => setTab(1)} size="small" className={`${tab === 1 && 'tab-active'} tab-btn`}>test2</Button>
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
                    transition={{ duration: 1 }}>
                    <Pricecard title="Standard" oprice="404,000원" price={"24,900 won per month / 1 year"}>
                        <Pricecard.PItem url="dd">Premo Door Lock</Pricecard.PItem>
                        <Pricecard.PItem url="dd">Smart Hub</Pricecard.PItem>
                        <Pricecard.UItem>Premo Application</Pricecard.UItem>
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
                    transition={{ duration: 1 }}>
                        <Pricecard title="Standard" oprice="40,000원" price={"24,900 won per month / 1 year"}>
                        <Pricecard.PItem url="dd">Premo Door Lock</Pricecard.PItem>
                        <Pricecard.PItem url="dd">Smart Hub</Pricecard.PItem>
                        <Pricecard.UItem>Premo Application</Pricecard.UItem>
                    </Pricecard>
                    </motion.div>
                )}
                </AnimatePresence>
            </div>
        </div>
    )
}
const Body = ({ children }) => children;
Tabs.Body = Body;

export default Tabs;