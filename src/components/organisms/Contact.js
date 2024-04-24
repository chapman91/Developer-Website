import React from 'react'
import "./Contact.css"
import Form from "../molecules/Form"
import Modal from "../molecules/Modal"

export const Contact = () => {
  return (
    <div id="Contact" className="contact-form">
      <Form/>   
      <Modal trigger={true}>
      <h1>My PopUp</h1>
      </Modal> 
    </div>
  )
}

