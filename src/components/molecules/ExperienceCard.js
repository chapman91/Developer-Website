import React from 'react'
import './ExperienceCard.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons';



const ExperienceCard = ({ title, text, imageSrc }) => {
  return (
    <Container className="py-3">
    <Card className="box-shadow-effect rounded-0" mb-3 style={{ backgroundColor: "white" }}>
    <Row noGutters>
      <Col md={3}>
        <img src={imageSrc} className="card-img img-fluid" alt="Card image" />
      </Col>
      <Col md={9} className="text-start">
        <Card.Body>
          <Card.Title>{title}
          <FontAwesomeIcon className="chevron" icon={faArrowUpLong}/> 
          </Card.Title> 
          <Card.Text>
           {text}
          </Card.Text>
        </Card.Body>
      </Col>
    </Row>
  </Card>
  </Container>
  )
}

export default ExperienceCard;