
import './App.css';
import  NavigationBar  from "./components/molecules/NavigationBar"
import { 
  Header, About, Project, BlogSection, Contact
} from "./organismsBarrel"


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
