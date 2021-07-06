import React, { useState } from 'react';
import {db} from '../../Firebaseconfig';


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
    
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    
    db.collection("contacts")
    .add({
      name:name,
      email: email,
      message:message,
    })
    .then(() => {
      alert("Mensaje enviado");
    })
    .catch((error => {
      alert(error.message);
    })
    )};
    


return(
    <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Example select</Form.Label>
    <Form.Control as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Example multiple select</Form.Label>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>



)    


export default Contact;