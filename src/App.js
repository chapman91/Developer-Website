import logo from './logo.svg';
import './App.css';
import BlogCard from './components/molecules/BlogCard'
import ExperienceCard from './components/molecules/ExperienceCard'
import Form from './components/molecules/Form'
import NavigationBar from './components/molecules/NavigationBar'
import Header from './components/organisms/Header'




function App() {
  return (
    <div className="App">
    <NavigationBar />
    <Header />
    <ExperienceCard />
    <BlogCard />
    <Form/>
    </div>
  );
}

export default App;
