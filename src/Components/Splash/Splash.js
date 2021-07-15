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
                  La idea es utilizar el arte como medio principal de comunicación, algo que puede ser útil para aquellos que tienen dificultades para identificar, canalizar y comunicar sus sentimientos.<br/> Al ser práctica, ayuda a conectarse al mundo exterior, pero, sobre todo, con el mundo interior, logrando identificar pensamientos desadaptativos y logrando así, el poder de modificarlos.
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