
import './App.css';
import  NavigationBar  from "./components/molecules/NavigationBar"
import { 
  Header, About, Project, BlogSection, Contact
} from "./organismsBarrel"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
    <NavigationBar />
    <Header />
    <About />
    <Project />
    <BlogSection />
    <Contact />
    </div>
  );
}

export default App;
