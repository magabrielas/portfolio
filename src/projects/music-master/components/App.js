import React, { Component } from 'react';

import Artist from './Artist';
import ArtistCard from './ArtistCard';
import Tracks from './Tracks';
import Search from './Search';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';



//constante global para el url
const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com';
class App extends Component {
    state = {artist:null, tracks:[],button:false};
    
    searchArtist = artistQuery =>{
        fetch(`${API_ADDRESS}/artist/${artistQuery}`)
        .then(response => response.json())
        .then(json => {
            if(json.artists.total>0){
                const artist=json.artists.items[0];
                this.setState({artist});
                fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
                .then(response=> response.json())
                .then(json => {
                    this.setState({tracks:json.tracks})
                    console.log('artist',artist);
                })//fetch inferior
                .catch(error => alert(error.message));
            }//fin del if
        })
        .catch(error => alert(error.message));
        
    }

    render(){
        console.log('this.state',this.state);
        return (
            <Container>
                <Row>
                    <Col md="12" align="center">
                        <h1>Music Master</h1>
                    </Col>
                </Row>
                <Search searchArtist = {this.searchArtist}/>
                <ArtistCard artistSearched = {this.state.artist}/>
                <Tracks tracks = {this.state.tracks}/>
            </Container>
        )
    }
}

/*Para tener seguimiento de lo que busca el usuario,
declaramos una propiedad o estado 'state', inicializada
en blanco'', luego se agrega un evento onChange al input
donde se llamara un metodo llamado updateArtistQuery*/

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

 /* const bio = this.state.displayBio ? ( 
            <div>
            <p>Hola</p>
            <p>quiero avanzar rapido</p>
            <p>Gracias, la gerencia</p>
        </div>
        ): null; //expresion ternaria
        */