import React from 'react';
import logo from '../../Img/logo-fondo-solo.png'
import {Button} from 'react-bootstrap'



const Splash = () => {

  return (<><><section className="splash">
    <div className="container">
      <div className="row">
        <div className="col-md-4"><h1>Cursos Gratis con Certificado
                  Estudia con más de 6.000 cursos gratis en español sobre diferentes temáticas, con la a tu país.</h1>
          <Button className="btn">florencia caca</Button>{' '}</div>
      </div>
    </div>
  </section></>
      <section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 center space">
              <h1>Hecho con amor.</h1>
              <p>
                  Somos creadoras independientes. Nuestros elementos son la forma, el espacio, la línea, la trama, el  color. Fabricamos objetos únicos que inspiran y alegran la Vida.
                  Vajilla apta para horno, microondas, lava vajilla y horno eléctrico.
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