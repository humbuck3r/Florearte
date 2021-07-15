import React from 'react';
import logo from '../../Img/logoblanco.png';

const Header = () => {
    

    return(
    <><header className="header-content">
        <nav className="nav">
            <a href="/">
            <img src={logo} className="logo" alt=""></img>
            <button className="nav-toggle" > <i className="fas fa-bars" /> </button>
        </a>
            <ul className="nav" >
                <li><a href="/">Inicio</a></li>
                <li><a href="Products">Productos</a></li>
                <li><a href="About">Quien soy?</a></li>
                <li><a href="Courses">Cursos</a></li>
                <li><a href="Contact">Contacto</a></li>
            </ul>
        </nav>

        
    </header></>


    )
}


export default Header;

