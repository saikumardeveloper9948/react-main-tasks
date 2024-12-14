import React,{useState, useEffect} from "react";
import axios from "axios"

export default function Products(){
    // const [res,setres]=useState('')
    const[product, setproduct]= useState("")

    useEffect(()=>{
        axios('https://fakestoreapi.com/products')
 
    .then(res=>{
        setproduct({product: res.data})
    })
    .catch(error=>console.error(error)
    )

    },[])
    

    return (

       
<div>
{product.map((a,b)=>{
    return(
        <div key={b}>
            <h2>{a.title}</h2>
        </div>
    )
})}
</div>
       
        
    )

}