import React from 'react'
import { Container, Row } from 'react-bootstrap';
import "./About.css"

export const About = () => {
  return (
  <section className="about-container">
    <Container>
    <Row>
      <div className="about">
      <h1 className="text-start display-4 about__title">About</h1>
      <p  className="text-start "> My journey into the world of technology began as a child, growing up surrounded by computers. Despite coming from a background with limited opportunities, I quickly recognized the immense potential the internet offered. In 2016, I discovered Bitcoin and embarked on a deep dive into the world of cryptocurrency. My daily routine included researching projects with long-term potential, and I became captivated by the interfaces of web3 applications.</p>
      <p  className="text-start"> This passion led me to the Odin Project and later to freeCodeCamp, where I honed my web development skills using their comprehensive curriculum and free resources. Through years of dedication, I have refined my ability to design and build front-end experiences that resonate with users.</p>
      <p  className="text-start"> Now, as a professional front-end engineer, I bring a strong foundation in web development and a deep understanding of the web3 ecosystem. I'm excited to apply my expertise to new and challenging projects. Whether it's crafting intuitive user interfaces or developing complex web3 applications, I strive to create impactful, user-centered experiences that bridge the gap between technology and people.</p>
      </div>
    </Row>
    </Container>
  </section>
  )
}
