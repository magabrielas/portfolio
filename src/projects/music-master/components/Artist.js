import React from 'react';
import Col from 'react-bootstrap/Col';
import Img from 'react-bootstrap/Image';

/*No se importa {Component} que este componente no tendra estado*/
/*Si el objeto que viene esta vacio, debe condicionar
  una accion para que no de error, mediante un if*/

  const Artist = ({artistSearched}) =>{
    if (!artistSearched) return null;
    const {name,images,followers,genres} = artistSearched;
return(
    <Col md="4"  >
            <Img variant="top" src={images[0] && images[0].url} roundedCircle fluid/>
                <h1>{name} </h1>
                <p>{followers.total} Followers </p>
                <p><strong>genres:</strong>{genres.join(',')} </p>
    </Col> 
)
}




export default Artist;
