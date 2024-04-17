'use client'
import Link from 'next/link'
import React from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'

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
      <Container fluid className="p-0">
            <Row>
                 <Col sm={2}><p  className='nazz'>Naaz</p></Col>
                 <Col sm={8}>
                    <span className='center-border'>
                        
                    </span>
                 </Col>
                 <Col sm={2}>
                 {
                  user ?
                  <span onClick={()=>logOut()} className='nazz' style={{cursor:"pointer"}}>Logout</span>
                  :
                  <Link href="/signin" className='nazz'>Login</Link>
                 }
                 </Col>
            </Row>
  </Container>
    </div>
  )
}

export default index
