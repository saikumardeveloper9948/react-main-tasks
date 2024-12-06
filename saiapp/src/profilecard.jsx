import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Profilecard (props){

 
        return (
            <div >
                <Card style={{ width: '18rem',  }}>
      <Card.Img variant="top" src={props.image}  style={{height:"180px"}}/>
      <Card.Body style={{overflowY:"scroll" ,height:"180px"}}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.desc}</Card.Text>
        
        
      </Card.Body>
      <Button variant="primary">{props.category}</Button>
    </Card>
            </div>
        )
    }
