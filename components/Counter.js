import {useEffect, useState} from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Counter = ({is24,title,number}) => {
    const [startCounter,setStart] = useState(false);
    const [isVisible,setVisible] = useState(false);
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
      });

    useEffect(() => {
        if (!isVisible && inView){
            setStart(true);
            setVisible(true);
        }
    },[inView])


        return (
            <div className="fact-con">
            <div ref={ref} className="fact-one__single">
                <div className="fact-one__inner">
                    <h3 className="fact-one__count counter">
                        {is24 ?
                        <>
                        <CountUp duration={2} end={startCounter ? 24 : 0} />
                        /
                        <CountUp duration={2} end={startCounter ? 7 : 0} />
                        </>
                        :
                        <CountUp duration={2} end={startCounter ? number : 0} />
                        }
                        </h3>
                    <p className="fact-one__text">{title}</p>
                </div>
            </div>
            </div>
        )
}

export default Counter;