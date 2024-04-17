'use client'
import React from 'react'
import { Carousel } from 'react-bootstrap'

const index = () => {
  return (
    <div>
    <Carousel data-bs-theme="dark">
    <Carousel.Item>
      <img
        className="d-block w-100 slide-img"
        src="https://www.maccosmetics.in/media/export/cms/collections/MACximal_waitlist/MACXIMAL_HP_D.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 slide-img"
        src="https://www.maccosmetics.in/media/export/cms/collections/MACximal_waitlist/MACXIMAL_HP_D.jpg"
        alt="Second slide"
      />
      <Carousel.Caption>
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 slide-img"
        src="https://www.maccosmetics.in/media/export/cms/collections/MACximal_waitlist/MACXIMAL_HP_D.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h5>Third slide label</h5>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    </div>
  )
}

export default index
