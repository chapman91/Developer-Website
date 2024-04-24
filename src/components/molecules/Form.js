import React, { useState } from 'react';
import './Form.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import LogoWeb3 from "../../assets/images/LogoWeb3.svg";
import useRecaptchaV3 from '../hooks/reCaptchav3/index';
import {Row} from 'react-bootstrap'
import PopUp from './Modal'

const Form = () => {
    // Call the useRecapthcaV3 hook to get the executeRecapthca function
    const executeRecaptcha = useRecaptchaV3();
    
    // State management for form fields
    // setFormData is a setter function
    // useState hook is applied here
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    const [messageSent, setMessageSent] = useState(false);

    // Handle form field changes
    const handleChange = (e) => {
        // Destructuring Event Object for name and value properties
        const { name, value } = e.target;
        // Updating Form Data State/ update object in JavaScript
        // Spread operator creates a copy of the current state of the 'formData' object
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {

        // Prevents the Page from reloading
        e.preventDefault();
 
        if (messageSent) {
            console.log('Message already sent');
            return;
        }

        // reCAPTCHA verification process gets execution 
        // returns the result of the reCAPTCHA verification process
        // The result is assigned to the variable token
        const token = await executeRecaptcha('submit');


        // If reCAPTCHA returns a valid token, proceed with form submission
        if (token) {
            console.log('reCAPTCHA token:', token);

            // Create form data to send
            const formDataToSend = new FormData();
            formDataToSend.append('firstName', formData.firstName);
            formDataToSend.append('lastName', formData.lastName);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('message', formData.message);
            formDataToSend.append('token', token); // Include reCAPTCHA token

            // Send form data to your server
            // You can use fetch or any other library to submit form data
            fetch('https://formsubmit.co/chapmandoneil91@gmail.com', {
                method: 'POST',
                body: formDataToSend,
            })
            .then(response => {
                if (response.ok) {
                    console.log('Form submitted successfully');
                    // Handle successful form submission
                } else {
                    console.log('Form submission failed');
                    // Handle form submission failure
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        } 
        
        else {
            console.log('reCAPTCHA execution failed');
        }
    };

    return (
        <div className="container custom-form-style box-shadow-effect">
            <div className="row d-flex justify-content-between align-items-center">
                <div className="col-md-6 ">
                    <img src={LogoWeb3} alt="Logo" className="h-auto w-50" />
                </div>
                <div className="col-md-6 contact-half">
                    <h2 className="text-start fw-semibold">CONTACT</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 text-start">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" name="message" rows="8" value={formData.message} onChange={handleChange} required></textarea>
                        </div>
                        <div id="recaptcha-container" className="g-recaptcha"> </div>
                        <Row className="d-flex justify-content-center">
                            <PopUp messageSent={messageSent} />
                        </Row>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;
