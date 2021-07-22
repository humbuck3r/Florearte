import React from 'react';
import {  Carousel } from 'react-bootstrap';
import courses1 from '../../Img/courses1.JPG';
import courses2 from '../../Img/courses2.JPG';
import courses3 from '../../Img/courses3.JPG';
import img from '../../Img/imgcurso.JPG';
import {Card, Button } from 'react-bootstrap';





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
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={courses2}
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={courses3}
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>
      </div>
        <div><p>En estos cursos podes aprender a trabajar la cerámica desde cero, modelar y esmaltar desde tu propia casa, creando piezas con pasta cerámica. Es complementario al curso de esmaltado en cerámica para principiantes en el cual te enseñaré lo básico en técnicas para decorar y esmaltar tus propias piezas cerámicas.
La manipulación directa y las diferentes actividades con el barro pueden  despertar una sensación de bienestar que mejora el estado de ánimo y la autoestima. Moldear requiere una gran concentración y esto nos aísla y nos ayuda a entrar en un estado meditativo.
Modelar cerámica activa la creatividad, descarga de tensión emocional y ayuda a manejar mejor las emociones del día a día. Se crean puentes entre sentidos y sentimientos, logrando vivenciar procesos internos primarios que conducen a expresarse y comunicarse facilitando el surgimiento de un acto creativo. Manipular la arcilla mejora la motricidad gruesa y fina, ayuda a incrementar la percepción y a liberar sentimientos atrapados.
Al sentir la arcilla entre nuestras manos se genera una sensación de control y dominio lo cual conduce a sentirse más seguro, reforzando así la autoestima.
El objetico de este taller es crear un primer encuentro con la materia prima: la arcilla, creando un puente con la imaginación con técnicas básicas de modelado, logrando piezas únicas. Lograr una expresión artística como una herramienta de exploración personal que favorezca su calidad de vida. Poder vivir una experiencia emocional enriquecedora a través de la participación en un trabajo  enfocado hacia una meta de carácter artístico.</p>
</div>
      
      <h1 className="titlecur">Cursos disponibles</h1>
      <div className="cursos">
      <Card style={{ width: '20rem' }} className="cards">
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>Curso para principiante</Card.Title>
    <Card.Text>
      Curso donde recorremos disintas tecnicas y materiales para poder iniciarte en este mundo
    </Card.Text>
    <Button variant="primary" className="btncards">Go somewhere</Button>
  </Card.Body>
</Card>

 <Card style={{ width: '20rem' }} className="cards">
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>Curso intermedio</Card.Title>
    <Card.Text>
      Curso donde recorremos disintas tecnicas y materiales para poder iniciarte en este mundo
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

 <Card style={{ width: '20rem' }} className="cards">
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>Curso avanzado</Card.Title>
    <Card.Text>
      Curso donde recorremos disintas tecnicas y materiales para poder iniciarte en este mundo
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>
    </section>
    )
}



export default Courses;