import Flicking from "@egjs/react-flicking";
import React, { createRef } from "react";
import { Fade, AutoPlay } from "@egjs/flicking-plugins";

const Partners = () => {
    const flicking = React.createRef(<Flicking/>);
    const plugins = [new Fade(), new AutoPlay(2000, "NEXT")];
    return (
    <Flicking ref={flicking} inputType = {["touch", "mouse"]} className="flicking flicking0"  autoResize = {true}  plugins={plugins}
        adaptive = {true} moveType={{ type: "snap", count: Infinity }} gap={16} bound={true} anchor={'80px'} circular={true}>
            {[...Array(5)].map((e) => (
                <div style={{background: "#" + ((1<<24)*Math.random() | 0).toString(16)}} className="panel"></div>
            ))
            }

    </Flicking>
    )
}
export default Partners