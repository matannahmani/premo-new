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
        {[...Array(5).keys()].map((e) => (
            <div className="hero-panel">
                <Image src={`/hero/home${e}.png`} className="partner-icon" style={{objectFit: 'cover'}}/>
            </div>
        ))
        }
          </AutoplaySlider>
    )
}
export default Partners