import React,{Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

class Search extends Component{
    state = {artistQuery:''};
    /*Helper method*/
    searchArtist = () =>{
        this.props.searchArtist(this.state.artistQuery);
    }
    /*updateArtistQuery es una "Callback function" un parametro 
    de tipo event*/
    updateArtistQuery = event =>{
        console.log('updateArtistQuery event.target.value',event.target.value);
        this.setState({artistQuery:event.target.value});
    }
    /*Metodo para usar con el evento onKeyPress*/
    handlerKeyPress = event =>{
        if(event.key==='Enter'){
            this.searchArtist();
        }
    }

    render(){
        return(
            <Row>
                    <Col md="12" align="center">
                    <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Search for an Artist"
                        onChange={this.updateArtistQuery}
                        onKeyPress={this.handlerKeyPress}
                        />
                        <InputGroup.Append>
                        <Button variant="success"
                         onClick={this.searchArtist}
                         >Search
                         </Button>
                        </InputGroup.Append>
                    </InputGroup>

                    </Col>
            </Row>
        )
    }
}

export default Search;