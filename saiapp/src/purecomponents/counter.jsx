import React, { useState } from "react";
import Display from "./display";

export default function Counter() {
  const [value, setValue] = useState(0);
  const [random, setRandom] = useState(0);

  const handleIncrement = () => {
    console.log("increment is done")
    setValue(value + 1);
  };
  const handleRandom = () => {
    console.log("random is done")
    setRandom(Math.random());
  };

  return (
    <div>
      <button onClick={handleIncrement}> INC</button>
      <button onClick={handleRandom}>click here</button>
      <h1>{random}</h1>
      <Display value={value} />
    </div>
  );
}




