import React from 'react'
import Carousel from 'react-bootstrap/Carousel'


function Home() {
  return (
    <div>
      <Carousel>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://c8.alamy.com/comp/2APMRD5/electronic-engineer-of-computer-technology-maintenance-computer-cpu-hardware-upgrade-of-motherboard-component-pc-repair-technician-and-industry-2APMRD5.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h1>MTechService</h1>
     </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://www.fixsquad.in/wp-content/uploads/2021/02/Laptop-Repair.png"
      alt="Second slide"
    />
    <Carousel.Caption>
    <h1>MTechService</h1>
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src="https://st.depositphotos.com/1000128/2158/i/450/depositphotos_21581271-stock-photo-stethoscope-on-laptop-keyboard.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
    <h1>MTechService</h1>
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.constantcontact.com/blog/wp-content/uploads/2021/01/Social-9.jpg"
      alt="Third slide"
    />
    
    <Carousel.Caption>
    <h1>MTechService</h1>
    
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </div>
  )
}

export default Home