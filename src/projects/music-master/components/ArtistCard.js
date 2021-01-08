import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


const ArtistCard = ({artistSearched}) =>{
    if (!artistSearched) return null;
    const {name,images,followers,genres} = artistSearched;
return(
    <Row>
        <Col md="4"  >
            <Card>
                <Card.Img variant="top" src={images[0] && images[0].url}/>
                <Card.Body>
                    <Card.Title>{name} </Card.Title>
                    <Card.Text>{followers.total} Followers </Card.Text>
                    <Card.Text><strong>genres:</strong>{genres.join(',')}  </Card.Text>
                </Card.Body>
            </Card>   
        </Col> 
    </Row>
)
}

export default ArtistCard;