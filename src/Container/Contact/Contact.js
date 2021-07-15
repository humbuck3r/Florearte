import React from 'react';
import {Form, Button} from 'react-bootstrap';
import imglogo from '../../Img/logo-fondo-solo.png'


const Contact = () => {

  return(
      <section className="backform2">
      <section className="backform ">
        
  <div className="container ">

  
    <Form className="form">
      <Form.Group controlId="formBasicEmail">
    <Form.Label>Nombre</Form.Label>
    <Form.Control type="name" placeholder="Ingresa tu nombre" />
    <Form.Text className="text-muted">
      *ingresa nombre y apellido
    </Form.Text>
  </Form.Group>


  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Ingresa tu email" />
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group>


  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Dejanos tu consulta.</Form.Label>
    <Form.Control as="textarea" rows={15} />
  </Form.Group>
  <Button variant="primary" type="submit">
    Enviar consulta
  </Button>
</Form>

    </div>
    </section>
    </section>
  )

}



export default Contact;