import React from 'react';
import bar from '../../Img/bars-solid.svg'
import logo from '../../Img/logoblanco.png';

const Header = () => {
    return(
    <><header className="header-content">
        
        <nav>
            <a href="/">
            <img src={logo} className="logo" alt=""></img>
        </a>
            <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="Products">Productos</a></li>
                <li><a href="About">Quien soy?</a></li>
                <li><a href="Courses">Cursos</a></li>
                <li><a href="Contact">Contacto</a></li>
            </ul>
        </nav>

        <div id="icon-menu">
            <a href=" alt="><img src={bar}></img></a>


        </div>
    </header></>


    )
}


export default Header;

