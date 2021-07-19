import React, { useState } from 'react';
import Logo from '../../Img/logoblanco.png';

const Header = props => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
      <header>
    <nav class="navbar navbar-expand-lg navbar-dark  ">
      <a class="navbar-brand text-info font-weight-bolder" href="/">
        <img src={Logo} alt="Logo" width="75" height="90" className="vertical-align-middle" />
        <span className=""></span>
      </a>
      <button class="custom-toggler navbar-toggler" id="btn-toggle"  type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
        <a className="nav-link text-light" href="/">Inicio</a>
        <a className="nav-link text-light" href="/Products">Productos</a>
        <a className="nav-link text-light" href="/About">Quien soy?</a>
        <a className="nav-link text-light" href="/Courses">Cursos</a>
        <a className="nav-link text-light" href="/Contact">Contacto</a>
        
      </div>
    </nav>
    </header>
  );
}

export default Header;
