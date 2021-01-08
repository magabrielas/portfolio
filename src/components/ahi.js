import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Jokes extends Component{
    state = {joke:{}};
    /*es buena practica colocar los metodos con resultado 
    asincrono en el DidMount, para evitar que espere*/
    componentDidMount(){
        fetch('https://official-joke-api.appspot.com/random_ten')
        .then(response => response.json())
        .then(json => {
            return (
                console.log('json',json),
                this.setState({joke:json}
                    )
                )
            });
        /*.then(response => {return response.json()}) esta sintaxis
        es sinonimo de la anterior. Como lo que retorna tambien es 
        una promesa, me permite encadenar otro .then()*/
    }
    render(){
        const {setup,punchline} = this.state.joke;
        return(
            <Container>
                <Row>
                <h2>Highlighted Joke</h2>
                </Row>
                <Row>
                    <Col></Col>
                {setup} <em>{punchline}</em>
                
                </Row>
            </Container>
        )
    }//render
}//end