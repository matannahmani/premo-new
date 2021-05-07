import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const AnimView = ({children}) => {
    const controls = useAnimation();
    const { ref, inView } = useInView();
    const [shown,setShown] = useState(false);
    useEffect(() => {
        if (inView && !shown) {
          controls.start('visible');
          setShown(true);
        }
        if (!inView && !shown) {
          controls.start('hidden');
        }
      }, [controls, inView]);
    const ViewAnim = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {duration: 0.5}
        }
    }
    return(
        <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={ViewAnim}
        >
            {children}
        </motion.div>
    )
}

export default AnimView;