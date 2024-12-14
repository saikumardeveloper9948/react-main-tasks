import React, { useState } from "react";
// import "./index.css"
import Authientication from "./modalform";

export default function LoginForm() {
  // const[user,setUser]= useState("")
  // const [result, setResult] = useState("")
  const [modalShow, setModalShow] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    expiresInMins: 30,
    
  });
  const [res, setRes] = useState(false);

  const change = (e) => {
    // console.log(e.target.name)
    const { name, value } = e.target;
    setFormData((a) => {
     
      return {
        ...a,
        [name]: value,
      };
    });
    // setUser(e.target.value);
  };
  const handlesubmit = (e) => {
    e.preventDefault();

    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),

      // Include cookies (e.g., accessToken) in the request
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setRes(true);
        setModalShow(true);
      });
  };
  return (
    <div>
      <form
        onSubmit={handlesubmit}
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          width: "50vw",
          margin: "auto",
          gap: "10px",
        }}
      >
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={change}
          placeholder="Enter username"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={change}
          placeholder="Enter password"
        />
        <input
          type="number"
          name="number"
          value={formData.expiresInMins}
          onChange={change}
          placeholder="login in givrn time"
        />
        <input type="file"
        name="file"
        value={formData.file}
        
        />
        <input type="submit" />
      </form>
      {res ? (
        <Authientication
          show={modalShow}
          onHide={() => setModalShow(false)}
          user={formData.username}
         
        />
      ) : (
        <Authientication
          show={modalShow}
          onHide={() => setModalShow(false)}
          user="Credentials doesn't match"
        />
      )}

      {/* <h1>{formData.user}</h1>
      <h1>{formData.mobile}</h1>
      <h1>{formData.email}</h1> */}
    </div>
  );
}
