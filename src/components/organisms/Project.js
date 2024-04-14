import React from 'react'
import "./Project.css"
import ExperienceCard from "../molecules/ExperienceCard"
import { FaDownload } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';

export const Project = () => {
  return (
   <Container>
    <section>
    <div className="experience">
    <h1>Experience</h1>
    <div className="experience__download align-items-center">
     <div className="d-flex align-items-center">Resume</div> 
    <FaDownload/>
    </div>
    </div>

    <ExperienceCard 
    title="Project 1"
    text="This is the description of project 1. You can add more details here."
    imageSrc="project1.jpg"
    />
     <ExperienceCard 
    title="Project 2"
    text="This is the description of project 2. You can add more details here."
    imageSrc="project2.jpg"
    />
     <ExperienceCard 
    title="Project 3"
    text="This is the description of project 3. You can add more details here."
    imageSrc="project3.jpg"
    />

    <ExperienceCard 
    title="Project 4"
    text="This is the description of project 4. You can add more details here."
    imageSrc="project4.jpg"
    />
    </section>  
    </Container> 
  )
}

