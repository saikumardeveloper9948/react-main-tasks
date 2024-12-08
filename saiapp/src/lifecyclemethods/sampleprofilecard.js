import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SampleProfilecard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} style={{height:"200px"}} />
      <Card.Body style={{overflowY:"scroll", height:"200px"}}>
        <Card.Title> {props.title}</Card.Title>
        <Card.Text>
        {props.desc}
        </Card.Text>
      </Card.Body>
        <Button variant="primary"> {props.price}</Button>
    </Card>

    
  );
}

export default SampleProfilecard;