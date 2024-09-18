import React, { useEffect } from 'react'
import {Row, Col} from 'react-bootstrap'
import Restcard from '../components/Restcard'
import { useDispatch,useSelector } from 'react-redux'
import { fetchRestaurent } from '../redux/restaurantSlice';


export default function Home() {

  const dispach = useDispatch();

  useEffect(()=>{
    dispach(fetchRestaurent())
  },[])

  const allRestaurent = useSelector((state)=>state.restaurant.allRestaurent.restaurants)
  
  return (
    <>
      <Row className='mt-3'>
        {
          allRestaurent?.length>0?
          allRestaurent.map((item)=>(
        <Col key={item.id}  sm={6} md={4} lg={3} xl={2} className='px-5 py-3'>
        <Restcard item={item}/>
          
        </Col>
        )):<Col className='text-center'>No item Found</Col>
      }
      </Row>
    </>
  )
}
