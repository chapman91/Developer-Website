import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons';
import './ExperienceCard.css';
import SkillButton from "../atoms/SkillButton"


const ExperienceCard = ({ title, text, imageSrc, linkto, skills }) => {

  return (
    <Container className="py-3">
    <Card className="box-shadow-effect rounded-0" mb-3 style={{ backgroundColor: "white" }}>
    <Row noGutters>
      <Col md={3}>
        <div className="custom-container ">
        <div className="gradient"> </div>
        <img src={imageSrc} className="card-img img-fluid" alt="Card image" />
        </div>
      </Col>
      <Col md={9} className="text-start">

    {linkto && (
      <a href={linkto} target="_blank" rel="noopener noreferrer">
        <Card.Body>
          <Card.Title id="title-bold" className="fw-semibold">{title}
          <FontAwesomeIcon className="chevron" icon={faArrowUpLong}/> 
          </Card.Title> 
          <Card.Text>
           {text}
          </Card.Text>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <SkillButton
                key={index}
                skillName={skill}
              />
            ))}
          </div>
        </Card.Body>
      </a>
     )}

      </Col>
    </Row>
  </Card>
  </Container>
  )
}

export default ExperienceCard;