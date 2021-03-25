import Flicking from "@egjs/react-flicking";
import React, { createRef } from "react";
import { Parallax, Fade, AutoPlay } from "@egjs/flicking-plugins";

const Partners = () => {
    const flicking = React.createRef(<Flicking/>);
    return (
    <Flicking ref={flicking} inputType = {["touch", "mouse"]} className="flicking flicking0"  autoResize = {true}
        adaptive = {true} moveType={{ type: "snap", count: Infinity }} gap={16} bound={true} anchor={'80px'} circular={true}>
            {[...Array(5)].map((e) => (
                <div style={{background: "#" + ((1<<24)*Math.random() | 0).toString(16)}} className="panel"></div>
            ))
            }

    </Flicking>
    )
}
export default Partners