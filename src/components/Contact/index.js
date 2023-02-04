import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formState;

  return (
    <section>
      <form id="contact-me">
        <div>
          <Form.Label>Name</Form.Label>
          <Form.Control type="Name" placeholder="Enter Your Name" />
        </div>

        <div>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter Your email" />
        </div>

        <div>
          <Form.Label>Message</Form.Label>
          <Form.Control type="message" placeholder="Enter Your Message" />
        </div>

        <Button variant="primary" type="submit">
        Submit
      </Button>
      
      </form>
    </section>
  );
}

export default Contact;
