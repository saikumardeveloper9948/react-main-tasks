import React from "react";
import Childtwo from "../childtwo/childtwocomp";

function Childone(props) {
  return (
    <div>
      {" "}
      <h3>iam Childone component</h3>
      <h2>{props.c1}</h2>
      <Childtwo  sai={props.c2}/>
    </div>
  );
}
export default Childone;
