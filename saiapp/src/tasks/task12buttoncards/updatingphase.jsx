import React from "react";
import axios from "axios";
import Samplecard from "./card";


import LoadingSpinner from "./spinner";

export default class Updating extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, product: null };
  }
  componentDidUpdate(prevprops, prevstate) {
    // console.log(prevstate, "previous state");
    // console.log(this.state.count, "current state");
    if (prevstate.count !== this.state.count) {
      axios(`https://fakestoreapi.com/products/${this.state.count}`)
      // .then((res)=>{console.log(res.json())})
      .then((res)=>{this.setState({ product:res.data})
    }).catch((error)=>{console.error("error fetching products: ", error);
      this.setState({product:null})
    })

      // console.log("component is updated");
    }
  }
  shouldComponentUpdate(nextprops, nextstate) {
    if (this.state.count >= 11) {
      return false;
    } else {
      return true;
    }
  }

  getSnapshotBeforeUpdate(prvssprops, prvsstate) {
    // console.log(prvsstate, "snapshot");
    return null ;
  }
  incby1 = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decby1 = () => {
    this.setState({ count: this.state.count - 1 });
  };
  btnone = () => {
    this.setState({ count: "" });
    this.setState({ count: 1 });
  };
  btntwo = () => {
    this.setState({ count: "" });
    this.setState({ count: 2 });
  };
  btnthree = () => {
    this.setState({ count: "" });
    this.setState({ count: 3});
  };
  btnfour = () => {
    this.setState({ count: "" });
    this.setState({ count: 4 });
  };
  btnfive = () => {
    this.setState({ count: "" });
    this.setState({ count: 5 });
  };
  btnsix = () => {
    this.setState({ count: "" });
    this.setState({ count: 6 });
  };
  btnseven = () => {
    this.setState({ count: "" });
    this.setState({ count: 7 });
  };
  btneight = () => {
    this.setState({ count: "" });
    this.setState({ count: 8 });
  };
  btnnine= () => {
    this.setState({ count: "" });
    this.setState({ count: 9 });
  };
  btnten = () => {
    this.setState({ count: "" });
    this.setState({ count: 10});
  };
  render() {
    const { count, product } = this.state; //destructuring of variables from state object
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <h1>TASK : 12</h1>
          <p>
            Repeat the class practise the inclass code and show the card as per
            the button value.
          </p>
        </div>
        <div
          style={{
            width: "auto",
            height: "auto",
            backgroundColor: "lightblue",
            padding: "10px",
          }}
        >
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {count}
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              gap:"10px", 
             
            }}
          >
            <button style={{ borderRadius:"30%", padding:"3px 5px", border:"none"}} onClick={this.incby1}disabled={count===10}>Next</button>
            <button style={{ borderRadius:"30%", padding:"3px 5px", border:"none"}} onClick={this.decby1} disabled={count <= 0}>
              Preview
            </button>
          </div>
          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
              flexWrap: "wrap",
              padding: "10px",
            }}
          >
            <button style={{borderRadius:"15px", border:"none", }} onClick={this.btnone}>Card 1</button>
            <button style={{borderRadius:"15px", border:"none", }} onClick={this.btntwo}>Card 2</button>
            <button style={{borderRadius:"15px", border:"none", }} onClick={this.btnthree}>Card 3</button>
            <button style={{borderRadius:"15px", border:"none", }} onClick={this.btnfour}>Card 4</button>
            <button style={{borderRadius:"15px", border:"none", }} onClick={this.btnfive}>Card 5</button>
            <button style={{borderRadius:"15px", border:"none", }} onClick={this.btnsix}>Card 6</button>
            <button style={{borderRadius:"15px", border:"none", }} onClick={this.btnseven}>Card 7</button>
            <button style={{borderRadius:"15px", border:"none", }} onClick={this.btneight}>Card 8</button>
            <button style={{borderRadius:"15px", border:"none", }} onClick={this.btnnine}>Card 9</button>
            <button style={{borderRadius:"15px", border:"none", }} onClick={this.btnten}>Card 10</button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {!product ? (
              <LoadingSpinner />
            ) : (
              <Samplecard
              img={product.image}
              title={product.title}
              id={product.id}
              price={product.price}
              desc={product.description}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}
