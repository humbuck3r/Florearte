import React from 'react';
import logo from '../../Img/logo-fondo-solo.png'
import {Button} from 'react-bootstrap'



const Splash = () => {

  return (<><><section className="splash">
    <div className="container">
      <div className="row">
        <div className="col-md-5"><h1>Cursos de ceramica presenciales y a distancia.</h1>
          <Button className="btn" href="/courses">Quiero cursar</Button></div>
      </div>
    </div>
  </section></>
      <section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 center space">
              <h1>Hecho con amor.</h1>
              <p>
                 En el año 2017 cree “Flore Arte Cerámica” dándole nombre e identidad a este proyecto que se venía gestando hace tiempo, cuando empecé a incursionar en  la cerámica. Es un espacio donde muestro al mundo mi labor y mi pasión de crear piezas funcionales personalizadas que dentro del hogar o los distintos escenarios  tienen una hermosa utilización. 
                Trabajar la arcilla es fascinante, esa transmutación a partir del modelado del barro que después de ser sometida a altas temperaturas, adquiere una forma permanente y perdurable en el tiempo. Me cautiva pensar que la huella de las manos va quedando grabada en la pared de la pieza creando piezas únicas. 
                La cerámica requiere dedicación, la construcción de una pieza es un proceso largo y cada objeto terminado es un viaje único, de subidas y bajadas. Es un reto constante, que logra desconectarme por varias horas de cualquier preocupación, y al  final, el resultado es gratificante y me pone muy  feliz.
                Modelar el barro es una nueva forma de meditación, ya que está relacionado con la respiración y el trabajo de nuestras propias manos. La arcilla es una materia prima de altas cualidades plásticas, ya que tiene mucha flexibilidad y maleabilidad lo que conduce a quien la manipula a sentir experiencias táctiles y psicomotrices que logran permitir una conexión espontánea entre el material y la expresión de quien la utiliza.
              </p>
              <img src={logo} className="logo-splash" alt=""></img>
          </div>
        </div>
      </div>
      <hr className="hr"/>
    </section></>
    )
}


export default Splash;