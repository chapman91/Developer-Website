import React from 'react'
import "./BlogSection.css"
import BlogCard from "../molecules/BlogCard"
import Container from 'react-bootstrap/Container';
import "./BlogSection.css"
import imageI from "../../assets/images/blockchainarticle1.jpg"
import imageII from "../../assets/images/stuxnet.jpg"
import imageIII from "../../assets/images/web3.jpg"



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
    title="Web3: The Future of the Internet"
    text="Navigating the Dawn of Web3: Decentralization, Cryptocurrencies, and the Future of the Internet."
    imageSrc={imageIII}
    />
    </Container>
    </section>
  )
}

