import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Authientication(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Form submission
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>check the details carefully</h4>
        <p>
         Username: {props.user} 
        </p>
        {/* <p> Phone no: {props.mobile}</p> */}
     
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Authientication;

