import React from 'react'
import "./BlogSection.css"
import BlogCard from "../molecules/BlogCard"
import Container from 'react-bootstrap/Container';
import "./BlogSection.css"

export const BlogSection = () => {
  return (
    <section id="BlogSection"className="blog-section">
    <Container>
    <div className="text-start ">
      <h1 className="display-4">Blog</h1>
    </div>
    <BlogCard
     title="Article 1"
     text="This is a description of the first article."
     imageSrc="article1.jpg"
    />
    <BlogCard
    title="Article 2"
    text="This is a description of the two article."
    imageSrc="article2.jpg"
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

