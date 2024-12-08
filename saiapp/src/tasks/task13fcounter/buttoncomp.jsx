import React from "react";
import Button from 'react-bootstrap/Button';

function Buttoncomp(props) {
    const {name, onClick}=props
  return (
    <>
      {/* <Button variant="outline-dark">{children}</Button> */}

      <Button onClick={onClick} variant="outline-danger">{name}</Button>

      {/* <Button variant="outline-warning">Warning</Button>
      <Button variant="outline-primary">Primary</Button>
      <Button variant="outline-secondary">Secondary</Button>
      <Button variant="outline-success">Success</Button>
     
      <Button variant="outline-info">Info</Button>
      <Button variant="outline-light">Light</Button> */}
    </>
  );
}

export default Buttoncomp;