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
        <Link href="/" className='link'>NEW</Link>
        <Link href="/" className='link'>LIPS</Link>
          <Link href="/about" className='link'>EYES</Link>
          <Link href="/ourservices" className='link'>FACE</Link>
          <Link href="/contact" className='link'>SKINCARE</Link>
          <Link href="/contact" className='link'>OFFERS</Link>
          <Link href="/ourservices" className='link'>SERVICE</Link>
          {/* <Link href="/" className='link'>Home</Link>
          <Link href="/about" className='link'>About Us</Link>
          <Link href="/ourservices" className='link'>Service</Link>
          <Link href="/contact" className='link'>Contact Us</Link> */}
          {/* <Link href="/signin" className='link'>Login</Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Container>


  
  )
}

export default Header
