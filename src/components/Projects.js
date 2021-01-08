import React from 'react';
import PROJECTS from '../data/project';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

//const Project = () =>
/*para este tipo de sintaxis, 
el componente no debe tener estados 'state'*/
const Project = props => {
        const {title,image,description,link}= props.project;
        return (
            <Col md="4">
                <Card>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <a href={link}>Mas Informacion</a>
                    </Card.Body>
                </Card>
            </Col>
        )
}




/*Para hacer un 'return' en linea, eliminar la palabra return
y dejar los parentesis y quitando las llaves*/

const Projects = () => /*{*/
        /*return*/(
            <Container>
                <Row>
                    <Col>
                    <h2>Highlighted Projects</h2>
                    </Col>
                </Row>
                <Row >
                    
                        {
                            PROJECTS.map(P =>/* {*/
                               /* return*/ (
                                /*<div key={PROJECTS.id}>{PROJECTS.title}</div>
                                Es sustituido por un JSX de la clase hijo Project*/
                                <Project key={P.id} project={P}/>
                                )
                            /*}*/)
                        }
                </Row>
                
            </Container>

        )
/*}// Fin de clase*/

export default Projects;