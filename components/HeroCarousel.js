import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import { Image } from "@geist-ui/react";
import 'react-awesome-slider/dist/styles.css';

const Partners = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
          <AutoplaySlider
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            organicArrows={false}
            interval={6000}
            bullets={false}
          >
        {[...Array(3).keys()].map((e) => (
            <div key={`hp${e}`} className="hero-panel">
                <Image src={`/hero/h${e}.png`} className="partner-icon" style={{objectFit: 'cover'}}/>
            </div>
        ))
        }
          </AutoplaySlider>
    )
}
export default Partners