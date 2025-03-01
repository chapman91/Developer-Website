
import './App.css';
import  NavigationBar  from "./components/molecules/NavigationBar"
import { 
  Header, About, Project, BlogSection, Contact
} from "./organismsBarrel"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/molecules/Footer';


function App() {



  return (
  
    <div className="App">
    <div style={{ paddingTop: '20px' }}>
    <NavigationBar />
    </div>
    <Header />
    <About />
    <Project />
    <BlogSection />
    <Contact />
    <Footer />
    </div> 

  );
}

export default App;
