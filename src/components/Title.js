import React, {Component} from 'react';

const TITLES=[
    'a software engineer',
    'a music lover',
    'an enthusiastic learner',
    'and a lot more'
];

class Title extends Component{
    state ={titleIndex:0, fadeIn:true};
    _isMounted = false;
    componentDidMount(){
        console.log('Title component has mounted');
        this._isMounted=true;
        /*Para poder cambiar el valor booleano de fadeIn, 
        establezco a setTimeout con una funcion callback que cambie a 
        false cada 2000 milisegundos.
        Luego en el metodo animatedTitle, agregar al setState: 
        fadeIn:true, para poder repetir ciclicamente,
        colocar el setTimeout dentro del metodo animatedTitles,  luego 
        this.SetState*/
        /*this.timeout es para poder liberar este proceso en el 
        componentWillUnmount*/
        this.timeout= setTimeout(()=>this.setState({fadeIn:false}),2000);
        this.animateTitles();
    }

    componentWillUnmount(){
        /*Para evitar el error :
        Can't perform a React state update on an unmounted component.
        llamar al clearInterval
        */
       this._isMounted=false;
        clearInterval(this.titleInterval);
        clearTimeout(this.timeout);

    }
    animateTitles= () =>{    
        /*this.titleInterval: adjuntar la funcion a una variable de
        la clase para que no se pierda en memoria y poder eliminarla 
        cuando el componente es sacado del DOM*/
        if(this._isMounted){ 
            console.log("dentro de animateTitles");
            this.titleInterval = setInterval(()=>{
            const titleIndex=(this.state.titleIndex + 1) % TITLES.length;
            this.setState({titleIndex,fadeIn:true});
            setTimeout(()=>this.setState({fadeIn:false}),2000);
        }, 4000);}
    }
    render(){
        /*Declaro una const para acceder al titleIndex y fadeIn, 
        por lo que ya no necesito referenciar a state directamente*/
        const {fadeIn,titleIndex}= this.state;
        const title= TITLES[titleIndex];
        return(
            <p className = {fadeIn ?'title-fade-in': 'title-fade-out'}>
                I am {title}
            </p>
        );
    }
}

export default Title;

/*If above solutions dont work, try this and it works for me:

componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state,callback)=>{
        return;
    };
}*/