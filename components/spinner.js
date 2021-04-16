import { motion } from "framer-motion"

const Spinner = () => {
    
    return (
        <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          backgroundColor: ['#71E689','#ED706D','#3D5582'],
          width: ['40px','60px','80px'],
          height: ['40px','60px','80px']
        }}
        transition={{ type: 'spring', duration: 1, repeat: Infinity, repeatDelay: 1,    repeatType: "reverse"          }}
      />
    )
}

export default Spinner;