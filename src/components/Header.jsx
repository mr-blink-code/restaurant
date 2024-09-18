import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Navbar,Container,Button, Form,Collapse } from 'react-bootstrap'
import { useState } from 'react'
import { searchRestaurant } from '../redux/restaurantSlice'
import { useDispatch } from 'react-redux'

export default function Header() {
  const [open, setOpen] = useState(false);
  const dispatch=useDispatch();

  return (
    <>
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            FOOD <span className='text-warning'>CIRCLE</span>
          </Navbar.Brand>
          
              <Collapse in={open} dimension="width">
                <div id="collapse_body">
                <Form.Control
                type="text"
                placeholder='Search Restaurent'
                onChange={(e)=>dispatch(searchRestaurant(e.target.value))}
                />
                </div>
              </Collapse>
              <Button
                className='ms-3'
                onClick={() => setOpen(!open)}
                aria-controls="collapse_body"
                aria-expanded={open}
              ><FontAwesomeIcon icon={faMagnifyingGlass}/></Button>
        </Container>
      </Navbar>
    </>
  )
}
