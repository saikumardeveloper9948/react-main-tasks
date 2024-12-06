import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Profilecard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} style={{height:"200px"}} />
      <Card.Body style={{overflowY:"scroll", height:"200px"}}>
        <Card.Title>{props.id} . {props.title}</Card.Title>
        <Card.Text>
        {props.desc}
        </Card.Text>
      </Card.Body>
        <Button variant="primary"> {props.category}</Button>
    </Card>

    // <Card style={{ width: '18rem' }}>
    //     <Card.Img variant="top" src={props.image} style={{height:"25vh"}}/>
    //     <Card.Body style={{overflowY:"scroll", height:"15vw"}}>
    //       <Card.Title> {props.title}</Card.Title>
    //       {/* <Card.Text>{props.price}/-</Card.Text> */}
    //       <Card.Text >
    //       {props.desc}
    //         {props.description}
    //       </Card.Text>
          
    //     </Card.Body>
    //     <Card.Footer className="text-muted"><Button variant="primary">{props.category}</Button></Card.Footer>
    //   </Card>
  );
}

export default Profilecard;