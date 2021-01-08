import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Switch, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history'; 

import Header from './components/Header';
import App from './components/App';
import Jokes from './components/Jokes';
import './fonts.css'; //Debe estar antes de cualquier otro css
import 'bootstrap/dist/css/bootstrap.min.css';
import MusicMaster from './projects/music-master';

/*Para poder utilizar el enrutamiento en React, se debe
instalar npm i react-router-dom, seguido de 
npm i history, luego importar createBrowserHistory, 
seguidamente se crea la variable historial*/

/*Para usar el High-order Component, se cambia en Route component 
por render, siendo igual una funcion callback, se puede hacer de dos
maneras, la comun render={()=><Header Component={App}></Header>} o
como un componente hijo render={()=><Header><App /></Header} */

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path='/' render={()=><Header><App /></Header>} />
            <Route path='/jokes' render= {()=><Header><Jokes /></Header>}/>
            <Route path='/music-master' render= {()=><Header><MusicMaster /></Header>}/>
        </Switch>
    </Router>,
    document.getElementById('root'));






/* Haciendo el import asi--> import createBrowserHistory from 'history/createBrowserHistory', 
da este mensaje de advertencia en consola
Warning: Please use `require("history").createBrowserHistory`
 instead of `require("history/createBrowserHistory")`. 
Support for the latter will be removed in the next major release.*/

/*Para que la ruta sepa diferenciar entre '/' y '/jokes' y,
en esta ultima ruta solo muestre el componente de jokes,
se utiliza exact='true', para que solo cuando la ruta sea /, 
se vaya al principal
Side note: se puede poner solo *exact* pues por defecto un
booleano siempre se inicializa en true*/ 

/*Como el objeto de history se usa una sola vez,
para tener un codigo mas limpio, puedo eliminar 
const historial = {createBrowserHistory}, colocarlo
directamente en el props que esta en el tag <Router>*/

/*catch es para manejar los errores en reject
new Promise((resolve,reject) =>{
    return reject(new Error('No Bears'));
    setTimeout(()=>{
        //console.log('Bears'); 
        resolve('Bears, Beets, Ballestar Galactica');
    },2000);
})
.then(quote=>{
console.log(quote);
})
.catch(error=>console.log('error',error));
*/