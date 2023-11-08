import React, { useState } from 'react'
import './RestOP.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';


function RestOP({op}) { //operating hour details
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  console.log({op});
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Operating Hours
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <MDBListGroup style={{ minWidthL: '22rem' }} light>
      <MDBListGroupItem><b>Sunday</b>: {op?.Sunday}</MDBListGroupItem>
      <MDBListGroupItem><b>Monday</b>: {op?.Monday}</MDBListGroupItem>
      <MDBListGroupItem><b>Tuesday</b>: {op?.Tuesday}</MDBListGroupItem>
      <MDBListGroupItem><b>Wednesday</b>: {op?.Wednesday}</MDBListGroupItem>
      <MDBListGroupItem><b>Thursday</b>: {op?.Thursday}</MDBListGroupItem>
      <MDBListGroupItem><b>Friday</b>: {op?.Friday}</MDBListGroupItem>
      <MDBListGroupItem><b>Saturday</b>: {op?.Saturday}</MDBListGroupItem>
    </MDBListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default RestOP