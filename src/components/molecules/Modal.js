import React from 'react'
// import LogoWeb3 from "../../assets/images/LogoWeb3.svg"
import "./Modal.css"


const Modal = ({ trigger, children }) => {
  return (
    <div className={`modal ${trigger ? 'show' : ''}`}>

      {/* Overlay */}
        <div className="overlay"></div>   
        <div className="modal-content">
        {/* <img src={LogoWeb3}  alt="Logo"></img>
        <h2>Thank You!</h2>
        <p>Your message was successfully sent!</p> */}
       
        <button className="close-modal" type="button">OK</button>
        {children}
       </div>
    </div>
  );
}

export default Modal