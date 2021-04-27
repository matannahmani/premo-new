import Flicking from "@egjs/react-flicking";
import { createRef, useEffect } from "react";
import { Fade } from "@egjs/flicking-plugins";
import { Image } from "@geist-ui/react";

const Partners = () => {
    const flicking = createRef(<Flicking/>);
    const plugins = [new Fade()];
    useEffect( async () => {
        setInterval(() => {
            if ( flicking.current !== null ){
                if (flicking.current.getIndex() !== flicking.current.getPanelCount() - 1)
                    flicking.current.next(1000);
                else
                    flicking.current.moveTo(0,1000)
            }
        }, 1000);
    },[flicking]);
    return (
    <Flicking ref={flicking} inputType = {["touch", "mouse"]} duration={1000} className="flicking flicking0" panelEffect = {x => 1 - Math.pow(1 - x, 3)}  bounce = {10}
    autoResize = {true}  plugins={plugins}
        adaptive = {true} moveType={{ type: "snap", count: 1 }} gap={16} bound={true} circular={false}>
            {[...Array(7).keys()].map((e) => (
                <div key={`p${e}`} className="panel">
                    <Image src={`/partners/${e}.png`} style={{objectFit: 'contain',height: '32px'}}/>
                </div>
                ))
            }

    </Flicking>
    )
}
export default Partners