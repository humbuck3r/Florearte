import React from 'react';
import {Navbar,Nav,Form,FormControl,Button,Container} from 'react-bootstrap';
import logo from '../../Img/logoblanco.png';

const Header = () => {
    return(
    <><header className="container">
        <Container>
    <section className='nav-bar' id="">
            <div className='navbar2'>
                <Navbar fixed="top" bg="dark" variant="dark">
                    <Navbar.Brand href="/">
                        <img src={logo} className="logo"/>
                        
                    </Navbar.Brand >
                    <Nav className="mr-auto" >
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <Nav.Link href="/Products">Productos</Nav.Link>
                        <Nav.Link href="/Courses">Cursos</Nav.Link>
                        <Nav.Link href="/About">Quien soy?</Nav.Link>
                        <Nav.Link href="/Contact">Contacto</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Buscar en florearte" className="mr-sm-3" />
                        <Button variant="outline-light">Buscar</Button>
                    </Form>
                </Navbar>
            </div>
        </section></Container>
        </header></>


    )
}


export default Header;