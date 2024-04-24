
import './App.css';
import  NavigationBar  from "./components/molecules/NavigationBar"
import { 
  Header, About, Project, BlogSection, Contact
} from "./organismsBarrel"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/molecules/Footer';
import Modal from './components/molecules/Modal';
import React, { useState } from 'react';


function App() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
  
    <div className="App">
    <div style={{ paddingTop: '20px' }}>
    <NavigationBar />
    </div>
    <Header />
    <About />
    <Project />
    <BlogSection />
    <Contact toggleModal={toggleModal} />
    {showModal && <Modal />}
    <Footer />
    </div> 

  );
}

export default App;
