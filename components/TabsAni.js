import { Button } from '@geist-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import React,{useEffect, useState} from 'react';

const TabsAni = ({children,changeHandler}) => {
    const [tab,setTab] = useState(0);

    useEffect(() => {
        changeHandler(tab)
    }, [tab])

    const buttons = React.Children.map(children, (child,index) => child.type.displayName === 'Item' ? 
        <Button onClick={() => setTab(index)} size="small" className={`${tab === index && 'tab-active'} tab-btn`}>{child.props.header}</Button>
    : null);
    const content = React.Children.map(children, (child,index) => child.type.displayName === 'Item' ?
    tab === index &&
        React.Children.map(child.props.children, (cchild) =>
            <motion.div
            key={cchild.key}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}>
                {cchild}
            </motion.div>
        )
    : null);
    return (
        <div style={{width: '100%'}} className="tabs">
            <header style={{maxWidth: '435px'}} className="tabs-header">
                {buttons}
            </header>
            <div style={{ overflow: "hidden", display: 'flex',flexWrap: 'wrap',width: '100%',justifyContent: 'center',alignItems: 'space-evenly'}} className="content">
                <AnimatePresence exitBeforeEnter>
                    {content}
                </AnimatePresence>
            </div>
        </div>
    )
}

const Item = ({ children }) => children;
Item.displayName = 'Item';
TabsAni.Item = Item;
export default TabsAni;