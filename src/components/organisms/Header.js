import React from 'react'
import './Header.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import IMAGES  from "../../imagesBarrel";


export const Header = () => {
  return (
    <section className="hero-section d-flex justify-content-center align-items-center">
      <Container>
      <Row className="text-start">
        <Col>
          <div className="d-flex flex-column">
          <h1 className="display-4 mb-4 hero-title col">Hey there, I am Doneil!</h1>
          <p className="lead mb-5 hero-description  font-weight-bold col">I am a software developer. I have great skills in designing friendly user interfaces. I build high performance applications and always keep security in mind.</p>
          </div>
          <div className="d-flex px-0">
          <img src={IMAGES.linkedinIcon} alt="linkedin-icon" className="img-fluid icon-gallery__icon"/>
          <img src={IMAGES.githubIcon} alt="github-icon"  className="img-fluid  icon-gallery__icon" />
          </div>
          <div className="d-flex justify-content-start mb-4 mt-5 icon-gallery">
            <img src={IMAGES.bootstrapIcon} alt="bootstrap-icon" className="img-fluid icon-gallery__icon"/>
            <img src={IMAGES.cssIcon} alt="css-icon"  className="img-fluid icon-gallery__icon" />
            <img src={IMAGES.figmaIcon} alt="figma-icon"  className="img-fluid  icon-gallery__icon" />
            <img src={IMAGES.gitIcon} alt="git-icon"  className="img-fluid  icon-gallery__icon" />
            <img src={IMAGES.htmlIcon} alt="html-icon"  className="img-fluid  icon-gallery__icon" />
            <img src={IMAGES.javascriptIcon} alt="Javascript-icon" className="img-fluid icon-gallery__icon" />
            <img src={IMAGES.nodejsIcon} alt="nodejs-icon" className="img-fluid icon-gallery__icon" />
            <img src={IMAGES.vercelIcon} alt="vercel-icon" className="img-fluid icon-gallery__icon"/>
            <img src={IMAGES.netlifyIcon} alt="netlify-icon" className="img-fluid icon-gallery__icon"/>
            <img src={IMAGES.comptiaIcon} alt="Comptia-icon" className="img-fluid icon-gallery__icon"/>
          </div>
        </Col>
        <Col md={5} className="d-flex justify-content-center align-items-center">
        <img src={require('../../assets/images/MyImage.png')} alt="Doneil Chapman" className="profile-picture"/>
        </Col>
      </Row> 
      </Container>
    </section>
  )
}

