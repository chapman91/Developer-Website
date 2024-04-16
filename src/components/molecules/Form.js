import React from 'react'
import './Form.css'
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import LogoWeb3 from "../../assets/images/LogoWeb3.svg"



const Form = () => {
  return (
    <div className="container  custom-form-style box-shadow-effect">  {/* Container with padding */}
      <div className="row d-flex justify-content-between align-items-center">
        <div className="col-md-6">  {/* Image container (6 columns on medium screens) */}
          <img src={LogoWeb3} alt="Contact Image" className="h-auto  w-50"/>
        </div>
        <div className="col-md-6">  {/* Form container (6 columns on medium screens) */}
          <h2 className="text-start fw-semibold">CONTACT</h2>
          <form>
            <div className="mb-3 text-start">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input type="text" className="form-control" id="firstName" />
            </div>
            <div className="mb-3 text-start">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input type="text" className="form-control" id="lastName" />
            </div>
            <div className="mb-3 text-start">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3 text-start">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="3"></textarea>
            </div>
            <div className="btn-container">
            <button type="submit" className="btn custom-btn-style ">Send</button>
           </div>
          </form>
        </div>
       
      </div>
    </div>
  );
};

export default Form;