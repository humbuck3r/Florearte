import React from 'react';
import {  Carousel } from 'react-bootstrap';
import courses1 from '../../Img/courses1.JPG'
import courses2 from '../../Img/courses2.JPG'
import courses3 from '../../Img/courses3.JPG'

 
const Courses =() =>{
    return(
    
    <section className="courses">
      <h1>Cursos online y  presenciales.</h1>
      
    <div className="container">
        <Carousel className="carousel">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={courses1}
      alt="First slide"
    />
    <Carousel.Caption className="caro">
      <h2>Cursos para principiantes.</h2>
      <p>Conoce las distintas tecnicas.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={courses2}
      alt="Second slide"
    />

    <Carousel.Caption className="caro">
      <h2>Conectacte</h2>
      <p>Con vos y la naturaleza</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={courses3}
      alt="Third slide"
    />

    <Carousel.Caption className="caro">
      <h2>Cursos avanzados</h2>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      <p className="text">En el año 2017 cree “FloreArte” dándole nombre e  identidad a este proyecto que se venía gestando, hace tiempo, cuando empecé a incursionar en  la cerámica. Un espacio donde muestro a mundo mi labor y mi pasión de crear piezas funcionales que dentro del hogar o los distintos escenarios  tienen una hermosa utilización.<br/> 
      Este oficio ancestral, que escapa de la rutina para concentrarse en la estimulante técnica de dominar al barro, favorece tanto  la salud mental como  emocional.Trabajar la arcilla es fascinante, esa transformación a partir del modelado de la tierra que después de ser sometida a altas temperaturas adquiere una forma permanente. Me cautiva pensar que la huella de las manos va quedando grabada en la pared de la pieza.<br/>

      La pasta requiere dedicación, la construcción de una pieza de cerámica es un proceso largo y cada objeto terminado es un viaje único, de subidas y bajadas. Es un reto constante, que logra desconectarme por varias horas de cualquier preocupación, y al  final, el resultado es gratificante y me pone muy  feliz.<br/>
      En este taller podes aprender a trabajar la cerámica desde cero, moldear y crear desde tu propio hogar, complementario al curso de esmaltado para principiantes, donde podré facilitarte  técnicas básicas para decorar y crear piezas únicas. <br/>

      Desconexión, concentración, paciencia, son conceptos que me surgen al hablar, pensar en cerámica. Monte mi taller en mi hogar, donde trabajo hace ya 4 años. Ocupo también un espacio en Casa Abril, un centro terapéutico ubicado en la ciudad de Mendoza dando talleres de cerámica inicial, como así también en Cultural Palmira. <br/>  
 </p>

      <p></p>
        </div>
    </section>
    )
}



export default Courses;