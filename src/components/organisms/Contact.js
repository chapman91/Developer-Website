import React from 'react'
import "./Contact.css"
import Form from "../molecules/Form"


export const Contact = ({toggleModal}) => {
  return (
    <div id="Contact" className="contact-form">
      <Form toggleModal={toggleModal} />   
    </div>
  )
}

