import React, { Component } from 'react';
import Projects from './Projects';
import profile from '../assets/magabriela.jpg';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'



class App extends Component {
    state = {displayBio: false};
    _isMounted=false;
    //callback method
    toggleDisplayBio = () =>{
        if(this._isMounted){
        this.setState({displayBio: !this.state.displayBio});
        }
    }
    componentDidMount(){ this._isMounted=true;console.log("willDidMount en Apps");}
    componentWillUnmount(){this._isMounted=false;console.log("WillUnMount en Apps");}
    render(){
        console.log('Hi');
       /* const bio = this.state.displayBio ? ( 
            <div>
            <p>Hola</p>
            <p>quiero avanzar rapido</p>
            <p>Gracias, la gerencia</p>
        </div>
        ): null; //expresion ternaria
        */
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Image src={profile} alt="profile" className='profileImage' roundedCircle/>
                </Row>
                <Row>
                    <Col md="12" align="center">
                        <h1>Hello!</h1>
                        <p>My name is Maria</p>
                        <p>I am always looking for working</p>
                        <Title />                                
                    {this.state.displayBio ? ( 
                    <Container>
                        <Row>
                            <Col md="2">
                            <p>Hola</p>
                            </Col>
                            <Col md="5">
                            <p>quiero avanzar rapido</p>
                            </Col>
                            <Col md="5">
                            <p>Gracias, la gerencia</p>
                            </Col>
                        </Row>
                        <Button  onClick={this.toggleDisplayBio}>Show Less</Button>
                    </Container>
                         ): (<div>
                             <Button variant="light"onClick={this.toggleDisplayBio}>Read more</Button>
                             </div>
                         )
                    }
                    </Col>
                </Row>
               <hr />
               <Projects />
               <hr />
               <SocialProfiles />

            </Container>
        )
    }
}

export default App;

/*Declarar variable con este estilo de funcion sin estado, 
para usar el High-order Component, ademas de camabiar el 
export default App a export default AppwithHeader
const AppWithHeader = () =>{
    return(
        <Header Component = {App}/>
    )
}
export default AppWithHeader; //Permite a otras clases importar a App sin necesidad de ponerlo en {}
*/
