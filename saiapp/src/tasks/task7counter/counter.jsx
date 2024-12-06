import React from "react";

class Counter extends React.Component {
    constructor() {
        super();
        this.state = { counter: 0 , color:"red"};
    }

    increment = () => {
        this.setState({ counter: this.state.counter + 1 , color:"green"});
    }

    decrement = () => {
        this.setState({ counter: this.state.counter - 1 , color:"blue"});
    }
    incby2 = () => {
        this.setState({ counter: this.state.counter + 2 , color:"yellow"});
    }
    decby2 = () => {
        this.setState({ counter: this.state.counter - 2 , color:"pink" });
    }
    incby5 = () => {
        this.setState({ counter: this.state.counter +5 , color:"orange" });
    }
    decby5 = () => {
        this.setState({ counter: this.state.counter -5 , color:"purple" });
    }

    render() {
        return (

           <div>
             <div style={{textAlign:"center"}}>
            <h1>Task : 7</h1>
            <p>counter app using class component</p>
            
        </div>
            <div>
                
                <div style={{display:"flex",justifyContent:"center ", alignItems:"center", gap:"20px"}}>
                <button style={{padding:"5px"}} onClick={this.increment}>Increment</button>
                <button style={{padding:"5px"}} onClick={this.decrement}>Decrement</button>
                <button style={{padding:"5px"}} onClick={this.incby2}>   inc+2   </button>
                </div>
                <h2  style={{color:this.state.color}}>{this.state.counter}</h2>
               
                <div style={{display:"flex",justifyContent:"center ", alignItems:"center", gap:"20px"}}>
                <button style={{padding:"5px"}} onClick={this.decby2}>Dec-2</button>
                <button style={{padding:"5px"}} onClick={this.incby5}>inc+5</button>
                <button style={{padding:"5px"}} onClick={this.decby5}>   Dec-5   </button>
                </div>
               
            </div>
           </div>
        );
    }
}

export default Counter;