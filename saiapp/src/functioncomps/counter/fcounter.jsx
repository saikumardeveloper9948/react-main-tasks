import React, { useState } from "react";

export default function Firstfunc() {
  const [text, setText] = useState(0);
  const [color,setcolor]=useState("red")

  const incby1 = () => {
    setText(text + 1);
    setcolor("blue")
  };
  const decby1 = () => {
    setText(text - 1);
    setcolor("pink")
  };
  const incby2 = () => {
    setText(text + 2);
    setcolor("green")
  };
  const decby2 = () => {
    setText(text - 2);
    setcolor("aqua")
  };
  const incby5 = () => {
    setText(text + 5);
    setcolor("black")
  };
  const decby5 = () => {
    setText(text - 5);
    setcolor("yellow")
  };
  return (
    <div style={{textAlign:"center", marginTop:"40px" }}>
      <button  onClick={incby1}>INC +1</button>
      <button onClick={decby1}>DEC -1</button>
      <button onClick={incby2}>INC +2</button>
      <h1 style={{color:color}}>Count: {text}</h1>
      <button onClick={decby2}>DEC -2</button>
      <button onClick={incby5}>INC +5</button>
      <button onClick={decby5}>DEC -5</button>
    </div>
  );
}
