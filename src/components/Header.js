import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
/*Como este componente no maneja estados, se puede prescindir
de la clase y mas declararlo como una componente funcional*/

/*High-Order Component:
Toma como entrada un componente y da como salida un nuevo componente.
Primero, se le da acceso sus props, para poder tener un componente
como input (entrada), viniendo el componente como un parametro*/
const Header = ({children}) =>{
        return(
        <div>
            <Row>
                <Col md="12">
                    <Navbar  expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/jokes">Jokes</Nav.Link>
                            <Nav.Link as={Link} to="/music-master">Music Master</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
            {children}
        </div>
        )
}


export default Header;

/*Forma presentada en el curso, sin embargo para poder usar el navBar
de reactBootstrap, se  importar Link, se deja el Nav.Link y se renombra
como "<Nav.Link as={Link}" seguido del to="el url"
<div>
    <Link to="/">Home</Link>
    <Link to="/jokes">Jokes</Link>
</div>
*/