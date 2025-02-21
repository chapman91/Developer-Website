import React from 'react'
import './Header.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import IMAGES  from "../../imagesBarrel";
import 'bootstrap/dist/css/bootstrap.min.css';


export const Header = () => {

  return (

  
    // <section className="hero-section d-flex justify-content-center align-items-center">
      <Container id="Header" className="hero-section d-flex justify-content-center align-items-center">
        
      <Row className="text-start">
        <Col md={7}>
          <div className="d-flex flex-column">
          <div className="d-flex mb-4 flex-column">
          <h1 className="display-4 mb-1 hero-title col">Doneil Chapman</h1>
          <h3 className="fw-semibold">Software Engineer</h3>
          </div>
          <p className="lead mb-5 hero-description fw-normal font-weight-bold col">I build pixel-perfect, security focus, and accessible digital experiences.</p>
          </div>
          <div className="d-flex px-0">
            <a href="https://www.linkedin.com/in/doneil-chapman-239209299/" target="_blank" rel="noopener noreferrer">
          <img src={IMAGES.linkedinIcon} alt="linkedin-icon" className="img-fluid icon-gallery__icon"/>
            </a>
          <a href="https://github.com/chapman91" target="_blank" rel="noopener noreferrer">
          <img src={IMAGES.githubIcon} alt="github-icon"  className="img-fluid  icon-gallery__icon" />
          </a>
          </div>
          <div className="d-flex justify-content-start mb-4 mt-5 icon-gallery">
            <div className="d-flex justify-content-start align-items-center"><h4 className="fw-semibold">TECH STACK</h4></div>
            <div className="d-flex flex-wrap">
            <img src={IMAGES.htmlIcon} alt="html-icon"  className="img-fluid  icon-gallery__icon" />
            <img src={IMAGES.cssIcon} alt="css-icon"  className="img-fluid icon-gallery__icon" />
            <img src={IMAGES.javascriptIcon} alt="Javascript-icon" className="img-fluid icon-gallery__icon" />
            <img src={IMAGES.bootstrapIcon} alt="bootstrap-icon" className="img-fluid icon-gallery__icon"/>
            <img src={IMAGES.reactIcon} alt="React-icon" className="img-fluid icon-gallery__icon"/>
            <img src={IMAGES.nodejsIcon} alt="nodejs-icon" className="img-fluid icon-gallery__icon" />
            <img src={IMAGES.figmaIcon} alt="figma-icon"  className="img-fluid  icon-gallery__icon" />
            <img src={IMAGES.gitIcon} alt="git-icon"  className="img-fluid  icon-gallery__icon" />
            <img src={IMAGES.vercelIcon} alt="vercel-icon" className="img-fluid icon-gallery__icon"/>
            <img src={IMAGES.netlifyIcon} alt="netlify-icon" className="img-fluid icon-gallery__icon"/>
            <img src={IMAGES.comptiaIcon} alt="Comptia-icon" className="img-fluid icon-gallery__icon"/>
            <img src={IMAGES.sqlIcon} alt="Sql-icon" className="img-fluid icon-gallery__icon"/>
            <img src={IMAGES.nextjsIcon} alt="Nextjs-icon" className="img-fluid icon-gallery__icon"/>
            </div>
          </div>
        </Col>
        <Col md={5} className="d-flex justify-content-center align-items-center">
        <img src={require('../../assets/images/MyImage.png')} alt="Doneil Chapman" className="profile-picture"/>
        </Col>
      </Row> 
      </Container>
    // </section>
  )
}

