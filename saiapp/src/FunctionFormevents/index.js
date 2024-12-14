import React, { useState } from "react";
import "./index.css"
import Modalbox from "./model"

export default function FormComp() {
  // const[user,setUser]= useState("")
  // const [result, setResult] = useState("")
  const [modalShow, setModalShow] = useState(false);
  const [formData, setFormData] = useState({
    user: "",
    mobile: "",
    email: "",
  });

  const change = (e) => {

    // console.log(e.target.name)
    const {name,value}=e.target
    setFormData((a)=>{
      console.log(a)
      return{
        ...a, 
        [name]:value
      }
    })
    // setUser(e.target.value);
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    setModalShow (true);
// alert(formData.user+" "+formData.mobile+" "+formData.email)
  };
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          name="user"
          value={formData.user}
          onChange={change}
          placeholder="Enter username"
        />
        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={change}
          placeholder="mobile number"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={change}
          placeholder="enter email"
        />
        <input type="submit" />
      </form>

      <Modalbox
        show={modalShow}
        onHide={() => setModalShow(false)}
        user={formData.user}
        mobile={formData.mobile}
        email={formData.email}
      />

      {/* <h1>{formData.user}</h1>
      <h1>{formData.mobile}</h1>
      <h1>{formData.email}</h1> */}
    </div>
  );
}
