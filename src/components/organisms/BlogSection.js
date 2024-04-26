import React from 'react'
import "./BlogSection.css"
import BlogCard from "../molecules/BlogCard"
import Container from 'react-bootstrap/Container';
import "./BlogSection.css"
import imageI from "../../assets/images/blockchainarticle1.jpg"
import imageII from "../../assets/images/stuxnet.jpg"



export const BlogSection = () => {
  return (
    <section id="BlogSection"className="blog-section">
    <Container>
    <div className="text-start ">
      <h1 className="display-4">Blog</h1>
    </div>
    <BlogCard
     title="What is Cryptocurrency & Blockchain"
     text="Demystifying Cryptocurrency and Blockchain: A Beginner's Guide to Understanding Digital Money and Decentralized Ledgers."
     imageSrc={imageI}

    />
    <BlogCard
    title="Unraveling Stuxnet: The Cyber Attack That Rewrote the Rules of Warfare"
    text="Unveiling the Groundbreaking Cyber Assault That Transcended the Digital Realm."
    imageSrc={imageII}
    />
    <BlogCard
    title="Article 3"
    text="This is a description of the three article."
    imageSrc="article3.jpg"
    />
    </Container>
    </section>
  )
}

