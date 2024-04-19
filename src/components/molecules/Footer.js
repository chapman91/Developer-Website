import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import IMAGES  from "../../imagesBarrel";
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3">
    <div className="container">
       <a href="https://twitter.com/Birixte" target="_blank" rel="noopener noreferrer">  {/* Replace with your social media link */}
          <img src={IMAGES.twitterIcon} alt="Twitter" width="32" height="32" className="img-fluid" />
        </a>
        <a href="https://www.facebook.com/checkpoint/828281030927956/?next=https%3A%2F%2Fwww.facebook.com%2F" target="_blank" rel="noopener noreferrer">  {/* Replace with your social media link */}
          <img src={IMAGES.facebookIcon} alt="Facebook" width="32" height="32" className="img-fluid" />
        </a>
        <a href="https://www.instagram.com/lee.chapo_/" target="_blank" rel="noopener noreferrer">  {/* Replace with your social media link */}
          <img src={IMAGES.instagramIcon} alt="Instagram" width="32" height="32" className="img-fluid" />
        </a>
    </div>
  </footer>
  )
}

export default Footer