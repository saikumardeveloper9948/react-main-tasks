import React from "react";


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
      <div >
        <div style={{textAlign:"center"}}>
            <h1>Task : 8</h1>
            <p>create a form submission task</p>
            
        </div>
       <div style={{border:"2px solid red" , padding:"50px", width:"40vw", margin:"auto"}}>
       <form onSubmit={this.submit} style={{display:"flex", flexDirection:"column",alignItems:"center" , gap:"25px"}}>
          <input type="text" name="fname" onChange={this.onchange} />
          <input type="text" name="sname" onChange={this.onchange} />
          <input type="submit" />
        </form>
        <p>{this.state.fullname}</p>
       </div>
      </div>
    );
  }
}
export default Form;
