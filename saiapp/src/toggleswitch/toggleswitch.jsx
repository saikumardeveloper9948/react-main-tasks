import React,{Component} from "react";

class Toggle extends Component{
    constructor(){
        super();
        this.state = {ison:true, color:"red"}
    }

    changes=()=>{
        this.setState({ison:!this.state.ison})
        this.setState({color:"red"})

    }

  
    render(){
        return(
            // <div>hii</div> 
            <div>
                <button onClick={this.changes} style={{color:this.state.ison?"white":"blue",backgroundColor:this.state.ison?"green":"red"}}>{this.state.ison?<h2>Switch ON</h2>:<h2>Switch OFF</h2>}</button>
                <h1 style={{color:this.state.ison?" green":"red",backgroundColor:this.state.ison?"red":"green"}}>{this.state.ison?<h1>Turned OFF</h1>:<h1>Turned ON</h1>}</h1>
            </div>
        )
    }
    // click =()=>{
    //     this.setState({isToggleOn: !this.state.isToggleOn})
    // }
}

export default Toggle;