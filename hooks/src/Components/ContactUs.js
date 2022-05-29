import React from 'react'
import "./Contact.css"
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
function ContactUs() {
  const SERVICE_ID = "service_gqxiqnk";
const TEMPLATE_ID = "template_0bkit23";
const USER_ID = "Bzke8pw1TMx0FFAUv";
  const handleOnSubmit=(e)=>{
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully"
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        })
      });
    e.target.reset()

  }
  return (
    
    <div className='contact-container'>
      <div className='contactDetails'>
      <h3>Contact Me:</h3>
      <h3>Madhav J. Khalse</h3>
     <p>Shop No.3 VrabdavanComplex,Adarsh Colony,Near Vighanhartha hospital,pahade Cornner.</p>
     <p>madhavkhaise22@gmail.com</p>
     <p> Mob:9890031740  / 7499437870</p>
     
     
      </div>
      <div className='contactForm'>
    <Form onSubmit={handleOnSubmit}>
  <Form.Group className="mb-3" controlId="user_email">
    <Form.Label>Email:</Form.Label>
    <Form.Control type="email" name="user_email" placeholder="Enter email" />
    </Form.Group>

  <Form.Group className="mb-3" controlId="user_name">
    <Form.Label>Name:</Form.Label>
    <Form.Control type="mb-3" name="user_name" placeholder="Enter Name.." />
  </Form.Group>
  <Form.Group className="mb-3" controlId="mobile-no">
    <Form.Label>Mobile No:</Form.Label>
    <Form.Control type="mb-3" name="mobile-no" placeholder="Enter Mobile number.." />
    </Form.Group>
    <Form.Group className="mb-3" controlId="user-message">
    <Form.Label>Message:</Form.Label>
    <Form.Control type="mb-3"   name="user_message" placeholder="Message" />
    </Form.Group>


  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
      </div>
  
  )
} 

export default ContactUs