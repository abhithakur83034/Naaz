'use client'
import Link from 'next/link'
import React from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { FaShoppingCart, FaUser } from 'react-icons/fa'

const index = () => {
  const storeUser = window.localStorage.getItem("user");
  let user = null;
  if (storeUser !== null) {
      user = JSON.parse(storeUser);
  }

  let logOut=()=>{
    localStorage.removeItem('user');
  }
  return (
    <div>
      <Container fluid>
            <Row>
                 <Col sm={2}><p  className='nazz'>Naaz</p></Col>
                 <Col sm={8}>
                    <span className='center-border'></span>
                 </Col>
                 <Col sm={2}>
                 {
                  user ?
                  <span onClick={()=>logOut()} className='nazz' style={{cursor:"pointer"}}>Logout</span>
                  :
                  <>
                  {/* <Link href="/signin" className='nazz'>Login</Link> */}
                   <Link href="/signin" className='nazz-icon'><FaUser color="blue" className="ic" /></Link>
                  <Link href="#" className='nazz-icon' style={{marginLeft:"30px"}}><FaShoppingCart color="blue" className="ic" /></Link>
</>
                 }
                 </Col>
            </Row>
  </Container>
    </div>
  )
}

export default index
