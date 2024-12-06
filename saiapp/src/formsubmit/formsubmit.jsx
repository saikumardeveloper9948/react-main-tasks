import React from "react";

// class Form extends React.Component {
//     constructor (){
//         super()
//         this.state = {text:" "}
//     }
//     submit=(event)=>{
//         event.preventDefault()
//         this.setState({text:event.target.elements[0].value})
//     }
//     render(){
//         return (
//             <div>
//                 <form  onSubmit={this.submit}>
//                     <input type="text"  />
//                     <input type="submit" />
//                 </form>
//                 <p>{this.state.text}</p>
//                 {/* {console.log(this.state.text)} */}
//             </div>
//         )
//     }
// }

class Form extends React.Component {
  constructor() {
    super();
    this.state = { fname: "", sname: "", fullname: "" };
  }
  onchange = (event) => {
    const {name, value} = event.target;
    this.setState({ [name]: value})

             //or

             
    // const value = event.target.value;
    // if (event.target.name === "fname") {
    //   this.setState({ fname: value });
    // } else if (event.target.name === "sname") {
    //   this.setState({ sname: value });
    // }
  };
  submit = (event) => {
    event.preventDefault();
    this.setState({ fullname: this.state.fname + " " + this.state.sname });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <input type="text" name="fname" onChange={this.onchange} />
          <input type="text" name="sname" onChange={this.onchange} />
          <input type="submit" />
        </form>
        <p>{this.state.fullname}</p>
      </div>
    );
  }
}
export default Form;
