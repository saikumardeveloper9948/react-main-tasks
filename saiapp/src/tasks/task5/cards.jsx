import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import buds from "../images/LAPTOP.jpg"



function Cards (props){
    return(
        <div >
<Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.data.image} style={{height:"25vh"}}/>
        <Card.Body style={{overflowY:"scroll", height:"17vw"}}>
          <Card.Title> {props.data.title}</Card.Title>
          {/* <Card.Text>{props.price}/-</Card.Text> */}
          <Card.Text >
            {props.data.description}
          </Card.Text>
          
        </Card.Body>
        <Card.Footer className="text-muted"><Button variant="primary">{props.data.category}</Button></Card.Footer>
      </Card>
        </div>
    )
}
export default Cards;