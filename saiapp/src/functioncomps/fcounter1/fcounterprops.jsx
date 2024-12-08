import React,{useState} from "react";
import Buttoncomp from "../../BUTTONCOMPONENT/button"

export default function CounterFc(){
    const [count, setCount] = useState(0);

    const counterhandler=(action)=>{
        switch(action){
            case "increment":setCount(count+1); break;
            case "decrement":setCount(count-1); break;
            default :setCount(0)
        }
    }
    return(

       <div>
         <div><h1>{count}</h1></div>
         {/* <Buttoncomp onClick={()=>{counterhandler("increment")}}>INCREMENT</Buttoncomp>
         <Buttoncomp onClick={()=>{counterhandler("decrement")}}>DECREMENT</Buttoncomp>
         <Buttoncomp onClick={()=>{}}>RESET</Buttoncomp> */}

            <div>
                
            <Buttoncomp onClick={()=>{counterhandler("increment")}} name="INCREMENT"/>
            <Buttoncomp onClick={()=>{counterhandler("decrement")}} name="DECREMENT"/>
                <Buttoncomp onClick={()=>{counterhandler("reset")}} name="RESET"/>
            </div>
            
       </div>
    )
}