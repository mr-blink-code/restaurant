import React, { useState } from 'react'
import { Row, Col, ListGroup, Button, Modal, Collapse } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


export default function RestView() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //useParam() is uesed to get paramenter passed in url

  const allRestaurent = useSelector((state) => state.restaurant.allRestaurent.restaurants)
  const { id } = useParams()

  const selectedRestaurent = allRestaurent?.find((item) => item.id == id)


  return (
    <>
      <Row>
        <Col md={1}>
        </Col>
        <Col md={3}>
          <img src={selectedRestaurent.photograph}
            width='100%' className='rounded' />
        </Col>
        <Col md={7} className='px-5'>
          <hr />
          <h4 className='text-center'>Restaurent <span className='text-warning'>Details</span></h4>
          <hr />
          <ListGroup>
            <ListGroup.Item><h5 className='text-center p-2'>Restaurent Name : {selectedRestaurent.name}</h5></ListGroup.Item>
            <ListGroup.Item>Neighbourhood: {selectedRestaurent.neighborhood}</ListGroup.Item>
            <ListGroup.Item>Address: {selectedRestaurent.address}</ListGroup.Item>
            <ListGroup.Item>Cuisine Type: {selectedRestaurent.cuisine_type}</ListGroup.Item>
            <ListGroup.Item className='text-center p-3 mb-2'>
              <Button onClick={handleShow}>Operating Hours</Button>
              <Modal
                show={show}
                centered
                onHide={handleClose}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Operating Hours</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ListGroup>
                    <ListGroup.Item>Monday: {selectedRestaurent.operating_hours.Monday}</ListGroup.Item>
                    <ListGroup.Item>Tuesday: {selectedRestaurent.operating_hours.Tuesday}</ListGroup.Item>
                    <ListGroup.Item>Wednesday: {selectedRestaurent.operating_hours.Wednesday}</ListGroup.Item>
                    <ListGroup.Item>Thursday: {selectedRestaurent.operating_hours.Thursday}</ListGroup.Item>
                    <ListGroup.Item>Friday: {selectedRestaurent.operating_hours.Friday}</ListGroup.Item>
                    <ListGroup.Item>Saturday: {selectedRestaurent.operating_hours.Saturday}</ListGroup.Item>
                    <ListGroup.Item>Sunday: {selectedRestaurent.operating_hours.Sunday}</ListGroup.Item>
                  </ListGroup>
                </Modal.Body>

              </Modal>
              <Button
                className='ms-3'
                onClick={() => setOpen(!open)}
                aria-controls="collapse_body"
                aria-expanded={open}
              >Click Here to see Reviews</Button>
              <Collapse in={open}>
                <div className='mt-3' id="collapse_body">
                  {
                    selectedRestaurent?.reviews?.length > 0 ?
                      selectedRestaurent.reviews.map((item) => (
                        
                            <div key={item.name}>
                              <hr />
                              <div className='mt-2'>
                                <h6>Name and Date : {item.name} - {item.date}</h6>
                                <p>Rating : {item.rating}</p>
                                <p>Deccription : {item.comments}</p>
                              </div>
                            </div>
                        
                            )) : <div> No rewiews found</div>
                }
                          </div>
                        </Collapse>
          </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row >
        </>
        )
}
