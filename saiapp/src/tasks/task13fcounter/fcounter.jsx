import React,{useState} from "react";
import Buttoncomp from "./buttoncomp"

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

        <div style={{ textAlign: "center" }}>
            <h1>TASK : 13</h1>
        <h4>counter comp using functional component
        </h4>
        </div>
             <div style={{marginTop:'130px', backgroundColor:"#D7D3BF", padding:"20px" , marginLeft:"25vw",width:"50vw" , display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
         <div><h1>{count}</h1></div>
         {/* <Buttoncomp onClick={()=>{counterhandler("increment")}}>INCREMENT</Buttoncomp>
         <Buttoncomp onClick={()=>{counterhandler("decrement")}}>DECREMENT</Buttoncomp>
         <Buttoncomp onClick={()=>{}}>RESET</Buttoncomp> */}

            <div style={{display:"flex", justifyContent:"center",flexWrap:"wrap",gap:"10px"}}>
                
            <Buttoncomp onClick={()=>{counterhandler("increment")}} name="INCREMENT"/>
            <Buttoncomp onClick={()=>{counterhandler("decrement")}} name="DECREMENT"/>
                <Buttoncomp onClick={()=>{counterhandler("reset")}} name="RESET"/>
            </div>
            
       </div>
        </div>
       

      
    )
}