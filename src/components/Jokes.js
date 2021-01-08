import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const JokeCard = props =>{
        const {setup,punchline} = props.esteAfecta;
    return(
        <Col md="12">
            <Card.Body>
                <Card.Text>{setup} <strong>{punchline}</strong></Card.Text>
            </Card.Body>
        </Col>
    )
}
/*Otra forma de hacerlo:
const JokeCard =({esteAfecta}) =>{
    const {setup,punchline} = esteAfecta;
    return(
        <Col md="12">
            <Card.Body>
                <Card.Text>{setup} <strong>{punchline}</strong></Card.Text>
            </Card.Body>
        </Col>
    )
}*/

class Jokes extends Component{
    /*Para evitar el mensaje de Warning en consola de unMounted 
    components, crear una variable booleana que este en true cuando 
    esta activo el componente, y en false cuando llame al metodo 
    componentUnMount*/
    _isMounted = false;
    /*para un solo objeto dentro del json puedo establecer state = {joke:{}},
    Ahora, para mostrar una coleccion de objetos, debo agregar un arreglo
    dentro del state*/
    state = {joke:{},jokes:[]}
    /*es buena practica colocar los metodos con resultado 
    asincrono en el DidMount, para evitar que espere*/
    componentDidMount(){
        this._isMounted = true;
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(json => {
            return (
                console.log('json',json),
                this.setState({joke:json}
                    )
                )
            })
            .catch(error=> alert(error.message));
        /*.then(response => {return response.json()}) esta sintaxis
        es sinonimo de la anterior. Como lo que retorna tambien es 
        una promesa, me permite encadenar otro .then()*/
    }
    /*Metodo para activar la solicitud de 10 nuevos chistes, haciendolo 
    mediante la sintaxis de propiedad de clase */
    fetchJokes= () => {
        fetch('https://official-joke-api.appspot.com/random_ten')
        .then(response => response.json())
        .then(json => {
            if(this._isMounted){
                this.setState({jokes:json}),
                console.log('arreglo de chistes',json);
            }//llave del if
        })
        .catch(error=>alert(error.message));

    }
 
    componentWillUnmount(){
        this._isMounted=false;
    }
    render(){
        //const {id,setup,punchline} = this.state.joke;
        return(
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <h2>Highlighted Joke</h2>
                            </Card.Header>
                            <JokeCard esteAfecta={this.state.joke}/>
                        </Card>
                    </Col>
                    <hr/>
                </Row>
                <Row>
                    <Col>
                    <Card>
                        <Card.Header>
                            <h3>Want ten new jokes?</h3>
                        </Card.Header>
                        {this.state.jokes.map(J =>{
                            return (<JokeCard key={J.id} esteAfecta={J}/>)
                            })
                        }
                        <Card.Footer>
                        <Button onClick={this.fetchJokes}>Bring it on!</Button>
                        </Card.Footer>
                    </Card>

                    </Col>
                </Row>
                
            </Container>
        )
    }//render
}//end

export default Jokes;

/*Poner el key={id} en la etiqueta de Col y no de Card.Text, ya que 
la funcion toma a Col como la etiqueta principal.*/

/* Otra forma de presentar el arreglo de jokes.
{   this.state.jokes.map(J =>{
         const {id,setup,punchline} = J;
        return (<JokeCard key={J.id} esteAfecta={J}/>)})
}*/
