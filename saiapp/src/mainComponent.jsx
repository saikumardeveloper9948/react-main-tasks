import {Component} from "react";
import "./mainComp.css"
import realme7 from "../src/images/REALME7.jpg"
import laptop from "../src/images/LAPTOP.jpg"
import speaker from "../src/images/SPEAKER.jpg"
import buds from "../src/images/BUDS.jpg"

const products=[
    {
    productName:"Mobile",
    image:realme7,
    price:5000,
    description: "good quality",
    isAvailable:true,
    Brand : "Realme7"
},
{
    productName:"Laptop",
    image:laptop,
    price:50000,
    description: "good quality",
    color:"black",
    isAvailable:false,
    Brand:"Dell"
},
{
    productName:"Speaker",
    image:speaker,
    price:5000,
    description: "good quality",
    color:"blue",
    isAvailable:true,
    Brand:"Sony"
},
{
    productName:"Buds",
    image:buds,
    price:2000,
    description: "good quality",
    color:"navyblue",
    isAvailable:false,
    Brand:"Apple"
}
]




class Main extends Component{
   
    render(){
        return (
            <>
                {/* <h1 style={obj.isAvailable? Styles.available : styles.unavailable}>{obj.productName}{obj.price}</h1> */}
                <div className="mainbox">
                    <div className={products[0].isAvailable?"availble":"unavailble"}>
                       <h1 className="name"> {products[0].productName}</h1>
                        <img className="img1" src={products[0].image } alt="mobile"></img>
                        <div className="desc">
                        <p><span>Price :</span> {products[0].price}/-</p>
                        <p><span>Quality :</span> {products[0].description}.</p>
                        <p><span>Brand :</span> {products[0].Brand}</p>
                        </div>
                    </div>
                    <div className={products[1].isAvailable?"availble":"unavailble"}>
                        <h2 className={products[1].isAvailable?"out":"in"}>Product out of stock</h2>
                        <h1 className="name">{products[1].productName}</h1>
                        <img className="img1" src={products[1].image } alt="laptop"></img>
                        <div className="desc">
                        <p><span>Price :</span> {products[1].price}/-</p>
                        <p><span>Quality :</span> {products[1].description}.</p>
                        <p><span>Brand : </span>{products[1].Brand}</p>
                        </div>
                        
                    </div>
                    <div className={products[2].isAvailable?"availble":"unavailble"}>
                        <h1 className="name">{products[2].productName}</h1>
                        <img className="img1"  src={products[2].image} alt="speaker"></img>
                        <div className="desc">
                        <p><span>Price :</span> {products[2].price}/-</p>
                        <p><span>Quality :</span> {products[2].description}.</p>
                        <p><span>Brand :</span> {products[2].Brand}</p>
                        </div>
                    </div>
                    <div className={products[3].isAvailable?"availble":"unavailble"}>
                        <h1 className="name">{products[3].productName}</h1>
                        <img className="img1"  src={products[3].image} alt="BUDS"></img>
                        <div className="desc">
                        <p><span>Price : </span>{products[3].price}/-</p>
                        <p><span>Quality :</span> {products[3].description}.</p>
                        <p><span>Brand :</span> {products[3].Brand}</p>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}

// const MyComponent = ({ available, unavilable }) => {
//     const className = ` ${available ? color:"red"} ${unavilable? color:'green'}`;
//     return <button className={className}>Click me</button>;
//   };
// const styles={
//     available{ styles.color:"red", padding:""}
// }

export default Main;
