import React from "react";
import Mounting from "./lifecyclemethods/mountingstate/L1mounting"
import Updating from "./lifecyclemethods/L2updatingphase/index"
import Firstfunc from "./functioncomps/fcounter/fcounter"
import CounterFc from "./functioncomps/fcounter1/fcounterprops";

import FormComp from "./FunctionFormevents/index"
import Counter from "./purecomponents/counter"
import Products from "./FCADDCART/products"
import LoginForm from "./loginauthencation/login"
// import {BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom'
function Mainhome(){
    return (
        <div className="main">
            {/* <Mounting/> */}
            {/* <Updating color="red"/> */}
            {/* <Firstfunc/>         */}

            {/* <CounterFc/> */}
          
            {/* <FormComp/> */}
            {/* <Counter/> */}
            {/* <Products/> */}
            {/* <LoginForm/> */}


            {/* <Router>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Routes>
                    <Route path="/home" element={<Calculator/>}/>
                    <Route path="/about" element={<Counter/>}/>
                    <Route path="/contact" element={<CounterFc/>}/>
                </Routes>
            </Router> */}
        </div>
    )
}
export default Mainhome;