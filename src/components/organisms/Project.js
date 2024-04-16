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
   
    <ExperienceCard 
    title="Project 1"
    text="This is the description of project 1. You can add more details here."
    imageSrc={image1}
    />
     <ExperienceCard 
    title="Project 2"
    text="This is the description of project 2. You can add more details here."
    imageSrc={image2}
    />
     <ExperienceCard 
    title="Project 3"
    text="This is the description of project 3. You can add more details here."
    imageSrc={image3}
    />

    <ExperienceCard 
    title="Project 4"
    text="This is the description of project 4. You can add more details here."
    imageSrc={image4 }
    />
    </Container> 
    </section>  
  )
}

