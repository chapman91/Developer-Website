import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import IMAGES  from "../../imagesBarrel";
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3">
    <div className="container">
       <a href="#">  {/* Replace with your social media link */}
          <img src={IMAGES.twitterIcon} alt="Twitter" width="32" height="32" className="img-fluid" />
        </a>
        <a href="#">  {/* Replace with your social media link */}
          <img src={IMAGES.facebookIcon} alt="Facebook" width="32" height="32" className="img-fluid" />
        </a>
        <a href="#">  {/* Replace with your social media link */}
          <img src={IMAGES.instagramIcon} alt="Instagram" width="32" height="32" className="img-fluid" />
        </a>
    </div>
  </footer>
  )
}

export default Footer