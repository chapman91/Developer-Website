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
          <h1 className="display-4 mb-4 hero-title">Hey there, nice to you here. I am Doneil, a software developer!</h1>
          <p className="lead mb-5 hero-description  font-weight-bold">I have great skills in designing friendly user interfaces. I build application robustly and security in mind</p>
          <div className="d-flex justify-content-center mb-4 icon-gallery">
            <img src={IMAGES.bootstrapIcon} alt="bootstrap-icon" className="img-fluid icon-gallery__icon"/>
            <img src={IMAGES.cssIcon} alt="css-icon"  className="img-fluid icon-gallery__icon" />
            <img src={IMAGES.figmaIcon} alt="figma-icon"  className="img-fluid  icon-gallery__icon" />
            <img src={IMAGES.gitIcon} alt="git-icon"  className="img-fluid  icon-gallery__icon" />
            <img src={IMAGES.githubIcon} alt="github-icon"  className="img-fluid  icon-gallery__icon" />
            <img src={IMAGES.htmlIcon} alt="html-icon"  className="img-fluid  icon-gallery__icon" />
            <img src={IMAGES.javascriptIcon} alt="Javascript-icon" className="img-fluid icon-gallery__icon" />
            <img src={IMAGES.nodejsIcon} alt="nodejs-icon" className="img-fluid icon-gallery__icon" />
            <img src={IMAGES.vercelIcon} alt="vercel-icon" className="img-fluid icon-gallery__icon"/>
            <img src={IMAGES.netlifyIcon} alt="netlify-icon" className="img-fluid icon-gallery__icon"/>
          </div>
        </Col>
        <Col md={5} className="text-end">
        <img src={require('../../assets/images/MyImage.png')} alt="Doneil Chapman"/>
      </Col>
      </Row> 
      </Container>
    </section>
  )
}

