import React from 'react';
//import ReactDOM from 'react-dom';
import App from './components/App';
import './fonts.css'; //Debe estar antes de cualquier otro css
import 'bootstrap/dist/css/bootstrap.min.css';

/*Debido a que esta dentro de un proyecto mayor
no es necesario renderizarlo en el DOM (document.getElementeById('root'))
se elimina el import a ReactDOM, ya no se hace 
ReactDOM.render(<App />, document.getElementById('root'));
sino que se usa:*/

export default App;





