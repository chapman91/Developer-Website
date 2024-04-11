import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoImage from '../../assets/images/LogoWeb3.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Assuming Font Awesome
import { faHome, faInfoCircle, faProjectDiagram, faNewspaper, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Import specific icons
import "./NavigationBar.css";


function NavigationBar() {

  const HomeIcon = () => {
    return <FontAwesomeIcon icon={faHome} />;
  };
  
  const AboutIcon = () => {
    return <FontAwesomeIcon icon={faInfoCircle} />;
  };

 const ProjectIcon = () => {
  return <FontAwesomeIcon icon={faProjectDiagram}/>
 }


 const BlogIcon = () => {
  return <FontAwesomeIcon icon={faNewspaper}/>
 }

 const ContactsIcon = () => {
  return <FontAwesomeIcon icon={faEnvelope}/>
 }

  return (
    <Navbar expand="lg" className="custom-navbar-bg custom-navbar">
      <Container>
      <Navbar.Brand href="#home">
    <img
      src={logoImage}
      width="50"
      height="50"
      alt="Webdev doneil"
    />
  </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="custom-alignment gap-x-2">
          <Nav className='justify-content-center'>
            <Nav.Item className='d-flex align-items-center px-4 text-dark'>
            <Nav.Link href="#home"> <HomeIcon/> Home</Nav.Link>
            </Nav.Item>
            <Nav.Item className='d-flex align-items-center px-4 text-dark'>
            <Nav.Link href="#about"><AboutIcon/> About</Nav.Link>
            </Nav.Item>
            <Nav.Item className='d-flex align-items-center px-4 text-dark'>
            <Nav.Link href="#projects"><ProjectIcon/> Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item className='d-flex align-items-center px-4 text-dark'>
            <Nav.Link href="#blog"><BlogIcon/> Blog</Nav.Link>
            </Nav.Item>
            <Nav.Item className='d-flex align-items-center px-4 text-dark'>
            <Nav.Link href="#contacts"><ContactsIcon/> Contacts</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}




export default NavigationBar;