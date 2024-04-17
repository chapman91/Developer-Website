import React from 'react'
import "./Project.css"
import ExperienceCard from "../molecules/ExperienceCard"
import { FaDownload } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import image1 from "../../assets/images/baboon-embed.png";
import image2 from "../../assets/images/gngpressurewash-embed.png";
import image3 from "../../assets/images/recruitpreps-embed.png";
import image4 from "../../assets/images/solana-airdrop-tool.png";




export const Project = ({fileName}) => {
    // Handles Resume Download
  const handleDownload = () => {
      const resumeUrl = `/DONEIL-CHAPMAN-RESUME.${fileName}`;
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }


    // Define an array of experience cards, each with its own data
  const experienceCards = [
      {
        title: "A Solana Token and Exchange Platform",
        text:"This is the description of project 1. You can add more details here.",
        imageSrc: image1,
        linkto: "https://661b07627b4a5ee999310c8a--babomemecoin.netlify.app/Home",
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Solana SDK', 'ThreeJs', 'Jupiter Api']
      },
      {
        title: "Interactive Website with Contact Form for Startup Car Wash",
        text: "This is the description of project 2. You can add more details here.",
        imageSrc: image2,
        linkto: "https://friendly-profiterole-a0ebb8.netlify.app/",
        skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap']
      },
      {
        title: "Basketball Training Website with Booking Integration",
        text: "This is the description of project 3. You can add more details here.",
        imageSrc: image3,
        linkto: "https://recruitpreps.com/",
        skills: ['HTML', 'CSS', 'JavaScript']
      },
      {
        title: "A Solana token distribution tool",
        text: "This is the description of project 4. You can add more details here.",
        imageSrc: image4,
        linkto: "https://brittanychiang.com/",
        skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap']
      }
    ]
  return (
  <section className="project-container">
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
        imgSrc={card.imageSrc}
        linkto={card.linkto}
        skills={card.skills}
      />
    ))}
    </Container> 
    </section>  
  )
}

