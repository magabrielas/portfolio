import React,{Component} from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Img from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import {PauseCircle, Play, PlayCircle, XCircle} from 'react-bootstrap-icons';

class Tracks extends Component{
    state = {playing:false,audio:null,playingPreviewUrl:null};
    /*Metodo con doble flecha, para llamar a su propia 
      funcion callback y evitar ciclos infinitos*/
    playAudio = previewUrl =>() =>{
        /*Agrego un estado a audio, para poder seguirle el estado 
        a un mismo objeto y no que se cree uno nuevo cada vez que 
        se reproduce audio*/
        const audio = new Audio(previewUrl);
        if(!this.state.playing){
            audio.play();
            this.setState({playing:true,audio,playingPreviewUrl:previewUrl});
        }else {
            this.state.audio.pause();
            if(this.state.playingPreviewUrl === previewUrl){
                this.setState({playing:false});
            }else{
                audio.play();
                this.setState({audio,playingPreviewUrl:previewUrl});

            }
        }
    }
    trackIcon = track =>{
        if(!track.preview_url){ return <span><XCircle size={96}/></span>}
        if( this.state.playing &&
            this.state.playingPreviewUrl=== track.preview_url){
                return <PauseCircle size={96}/>
            }
        return <span><PlayCircle size={96}/></span>
    }

    render(){
        const {tracks} = this.props;
        return(
            <Row>
                {
                    tracks.map(track =>{
                        const {id,name,album,preview_url} = track;
                        return (
                            <Col md="3"key={id}
                                 onClick={preview_url ? this.playAudio(preview_url):null}>
                                <br/>
                                <Card>
                                <Card.Body>
                                    <Card.Img src={album.images[0].url} alt='track/images'/>
                                    <Card.ImgOverlay className='row justify-content-center' >
                                        <Card.Text className='align-self-center track-icon'>{this.trackIcon(track)}</Card.Text>    
                                    </Card.ImgOverlay>
                                    <Card.Text>{name}</Card.Text>
                                    </Card.Body>

                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>

        )
    }
}

export default Tracks;