import React from "react";
// import Mounting from "./lifecyclemethods/mountingstate/L1mounting"
// import Updating from "./lifecyclemethods/L2updatingphase/index"
// import Firstfunc from "./functioncomps/fcounter/fcounter"
import CounterFc from "./functioncomps/fcounter1/fcounterprops";

function Mainhome(){
    return (
        <div className="main">
            {/* <Mounting/> */}
            {/* <Updating color="red"/> */}
            {/* <Firstfunc/>         */}

            <CounterFc/>
        
        </div>
    )
}
export default Mainhome;