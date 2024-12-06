import React from "react";

function ProductCards(props){
    return(
        <div>

            {props.children.map((a,b)=>{
                return(
                    <div key={b}>
                        <h2>{a}</h2>
                    </div>
                )
            })}
            {/* <h2>{props.children}</h2> */}
          {/* {  console.log(props.children)} */}
        </div>
    )
}
export default ProductCards;