import React from 'react'
import "./Project.css"
import ExperienceCard from "../molecules/ExperienceCard"
import { FaDownload } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import image1 from "../../assets/images/baboon-embed.png";
import image2 from "../../assets/images/gngpressurewash-embed.png";
import image3 from "../../assets/images/recruitpreps-embed.png";
import image4 from "../../assets/images/solana-airdrop-tool.png";




export const Project = () => {

  const handleDownload = () => {
  // Specify the file name and extension
  const fileName = 'DONEILCHAPMANRESUME.pdf';

  // Construct the URL to the resume file in the public folder
  const resumeUrl =  '/' + fileName;

  // Create a link element to trigger the download 
  const link = document.createElement('a');
  link.href = resumeUrl;
  link.setAttribute('download', fileName);

  // Append the link to the document body and trigger the download 
  document.body.appendChild(link);
  link.click();


  // Clean up: remove the link element from the document body
  document.body.removeChild(link);
 
  };
   
    // Define an array of experience cards, each with its own data
  const experienceCards = [
      {
        title: "A Solana Token and Exchange Platform",
        text:"Designed a sleek user interface using Google's Material Library. Developed a responsive application for Solana SLP tokens, integrating secure web3 wallet functionalities. Users can seamlessly interact with the Jupiter user interface embedded into the app, leveraging the Popular Solana Dex.",
        imageSrc: image1,
        linkto: "https://662497bdb7face573ec03b4c--babomemecoin.netlify.app/",
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Solana SDK', 'ThreeJs', 'Jupiter Api']
      },
      {
        title: "Interactive Website with Contact Form for Startup Car Wash",
        text: " Designed user-friendly UI, configured stable servers and applied SEO techniques for visibility.",
        imageSrc: image2,
        linkto: "https://friendly-profiterole-a0ebb8.netlify.app/",
        skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap']
      },
      {
        title: "Basketball Training Website with Booking Integration",
        text: "Designed a modern user interface using Google’s Material Library and built a responsive, interactive website. Securely integrated the Calendly API with OAuth for scheduling, implemented Google’s V2 Captcha for security, and included a form for users to send messages to the business.",
        imageSrc: image3,
        linkto: "https://recruitpreps.com/",
        skills: ['HTML', 'CSS', 'JavaScript']
      },
      {
        title: "Bitcoin Startup",
        text: "Converted a design file into a fully functional web application. This involved implementing complex UI components, optimizing the website for performance, and ensuring seamless cross-browser compatibility across various platforms and devices.",
        imageSrc: image4,
        linkto: "https://main--golden-mochi-f10593.netlify.app/",
        skills: ['JavaScript', 'JavaScript', 'HTML', 'CSS']
      }
    ]
  return (
  <section id="Projects" className="project-container">
   <Container>
    <div className="experience">
    <h1 className="text-start display-4">Experience</h1>
    <div className="experience__download align-items-center">
     <div className="d-flex  justify-content-center" onClick={() => handleDownload('pdf')}>
      <p className="d-flex align-items-center justify-content-center resume-text">Resume</p>
      <FaDownload/>
      </div> 
    </div>
    </div>
   
    {experienceCards.map((card, index) => (
      <ExperienceCard
        key={index}
        title={card.title}
        text={card.text}
        imageSrc={card.imageSrc}
        linkto={card.linkto}
        skills={card.skills}
      />
    ))}
    </Container> 
    </section>  
  )
    };

