import React from 'react'
import './ExperienceCard.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import './BlogCard.css' 


const BlogCard = ({ title, text, imageSrc }) => {
  return (
    <Container className="py-3">
    <Card className="box-shadow-effect  Card-Style rounded-0" mb-3 style={{ backgroundColor: "white" }}>
    <Row noGutters>
      <Col md={2} className="article-container">
        <img src={imageSrc} className="card-img img-fluid" alt="article-photo" />
      </Col>
      <Col md={10} className="text-start">
        <Card.Body>
          <Card.Title className="fw-semibold">{title}
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

export default BlogCard;