import React from "react";
// import Childone fr+om "./childonecomp/childone.jsx"
// import Conditonalrender from "../conditionalrendering/conditionalrend.jsx"
import Admin from '../conditionalrendering/adminpage/admin';
import User from '../conditionalrendering/userpage/userpage';
function Parent(props){
    return (
        <div>
            
            {/* <Childone c1=" from parent to child one"  c2="from parent to child two"/> */}
            {/* <Conditonalrender login="user"/> */}
            {props.login?<Admin/>:<User/>}
            
        </div>
    )
       

}
export default Parent;

