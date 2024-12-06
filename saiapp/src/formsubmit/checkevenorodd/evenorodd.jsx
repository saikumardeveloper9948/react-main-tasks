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
            this.setState({result:"even"})
        }
        else{
            this.setState({result:"odd"})
        }
    }
    else{
        window.alert("Please enter a number")
        this.setState({result:""})
    }
  };
  render() {
    return (
      <div style={{alignItems:"center", padding:"10% 40%"}}>
        <form onSubmit={this.submit} >
          <input type="text" name="number" onChange={this.onchange} />
             <input type="submit" />
        </form>
        <h1>{this.state.result}</h1>
      </div>
    );
  }
}
export default Numbercheck;
