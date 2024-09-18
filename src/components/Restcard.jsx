import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Restcard({item}) {
  return (
    <>
    <Card className='text-light fs-4 fw-bold'>
    <Link to={`/restaurent_view/${item?.id}`} style={{textDecoration:'none'}}> 
      <Card.Img  src={item.photograph} />
      <Card.ImgOverlay>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {item.neighborhood}
        </Card.Text>
        
      </Card.ImgOverlay>
      </Link>
    </Card>
    </>
  )
}
