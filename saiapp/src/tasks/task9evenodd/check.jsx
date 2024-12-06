// import { Alert } from "bootstrap";
import React from "react";

class Numbercheck extends React.Component {
  constructor() {
    super();
    this.state = { result: "", number: "" };
  }
  onchange = (event) => {
    const {name, value} = event.target;
    this.setState({ [name]: value})
  };
  submit = (event) => {
    event.preventDefault();
    const number=Number(this.state.number)
    if(!isNaN(number)){
        if(number%2===0){
            this.setState({result:"Even number"})
        }
        else{
            this.setState({result:"Odd number"})
        }
    }
    else{
        window.alert("Please enter a number")
        this.setState({result:""})
    }
  };
  render() {
    return (
        <div >

            
        <div style={{textAlign:"center"}}>
            <h2>Task : 9</h2>
            <p> check whether input is even or odd using class component</p>
            
        </div>

      <div style={{ padding:"15px", width:"40vw", margin:"auto", border:"2px solid green"}}>
        <form onSubmit={this.submit} >
          <input type="text" name="number" onChange={this.onchange} /> &nbsp; &nbsp; &nbsp;
             <input type="submit" value="check" style={{padding:"2px"}}/>
        </form>
        <h1>{this.state.result}</h1>
      </div>
        </div>
    );
  }
}
export default Numbercheck;