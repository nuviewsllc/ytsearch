import React from 'react'
import ReactDOM from 'react-dom'
import Logo from '../Comedio3.png'
const Modal = props => {


    return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active"> 
     
        <div className= "ui standard modal visible act">
           LOLL
           
           <img src= {Logo} alt= ""></img>
           
    
        </div>
    </div>,document.querySelector('#modal')
    );

    
};

export default Modal;