'use client'
import Link from 'next/link'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function Header() {
  return (
    <Container fluid className="p-0">
    <Navbar collapseOnSelect expand="lg" bg="white"  className='py-0 nav'>
      <Navbar.Brand className="app_name" href="/home">
        {/* <img src='logo.png' height='100px' alt="Logo" className='logo'/> */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-center" id="responsive-navbar-nav">
        <Nav className="m-2 ">
        <Nav.Link as={Link} href="/" className='link'>Home</Nav.Link>
        <Nav.Link as={Link} href="/lips" className='link'>LIPS</Nav.Link>
          <Nav.Link as={Link} href="/eyes" className='link'>EYES</Nav.Link>
          <Nav.Link as={Link} href="/face" className='link'>FACE</Nav.Link>
          <Nav.Link as={Link} href="/skincare" className='link'>SKINCARE</Nav.Link>
          <Nav.Link as={Link} href="/offerpage" className='link'>OFFERS</Nav.Link>
          <Nav.Link as={Link} href="/ourservices" className='link'>SERVICE</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Container>


  
  )
}

export default Header
