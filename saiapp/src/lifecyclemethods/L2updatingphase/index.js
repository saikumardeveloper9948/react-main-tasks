import React from "react";
import axios from "axios";
import SampleProfilecard from "../sampleprofilecard";


import LoadSpinner from "../../loadspinner/index"

export default class Updating extends React.Component {
  constructor(props) { //here props is the object that contains the data passed from the parent component
    super(props);  // this is a call to the parent class constructor
    this.state = { count: 0, product: null, color:"green" };
  }

  static getDerivedStateFromProps(props,state){ // this will execute when component is mounted
          // ---> in this we should not use this.setState 
    // console.log(props,"props");
    // console.log(state,"state");
    return {color:props.color};
  }
  componentDidUpdate(prevprops, prevstate) {
    console.log(prevstate, "previous state");
    console.log(this.state.count, "current state");
    if (prevstate.count !== this.state.count) {
      console.log("component is updated");
    }
    axios
      .get(`https://fakestoreapi.com/products/${this.state.count}`)
      .then((res) => {
        // console.log(res.data);
        this.setState({ product: res.data })
//         .catch((error) => {
//             console.error("Error fetching product:", error);
//             this.setState({ product: null }); // Optionally reset product on error
//   });     
      });
  }
  shouldComponentUpdate(nextprops, nextstate) {
    if (this.state.count >= 10) {
      return false;
    } else {
      return true;
    }
  }

  getSnapshotBeforeUpdate(prvssprops, prvsstate) {
    console.log(prvsstate, "snapshot");
    return null;
  }
  incby1 = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decby1 = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    const { count, product,color } = this.state; //destructuring of variables from state object
    return (
      <div style={{width:"auto", height:"auto", backgroundColor:"lightblue", padding:"10px" }}>
        <h1 style={{display:"flex", justifyContent:"center", alignItems:"center" ,color}}>{count}</h1>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"row"}}>
        
        <button onClick={this.incby1}>Next</button>
        <button onClick={this.decby1} disabled={count <= 0}>
          Preview
        </button>

        </div>
        <div  style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
        {!product ? 
          (
         <LoadSpinner/>

          )
         : 
         ( <SampleProfilecard
            img={product.image}
            title={product.title}
            price={product.price}
            desc={product.description}
          />)
        }
        </div>
      </div>
    );
  }
}
