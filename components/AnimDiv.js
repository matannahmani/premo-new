import { motion } from "framer-motion";

export const AnimDiv = ({akey,children,className}) => (
    <motion.div
    key={akey}
    className={className}
    style={{width: '100%',maxWidth: '640px', overflow: "hidden",padding: '16px',margin: '40px 0px',background: 'white',borderRadius: '16px',boxShadow: '0 5px 10px rgb(0 0 0 / 12%)' }}
    initial={{ opacity: 0,height: 20 }}
    animate={{ opacity: 1,height: "auto" }}
    exit={{ opacity: 0,height: 20 }}
    transition={{ duration: 0.5 }}>
    {children}
    </motion.div>
)