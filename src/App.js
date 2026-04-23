import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import HomeTwo from './components/HomeTwo';
import Experience from './components/Experience';
import Skills from './components/Skill';
import Project from './components/Project';
import Contact from './components/Contact';





function App() {
  return (
    <div className="App">
     
    <HomePage/>
     <HomeTwo/>
     <Experience/>
     <Skills/>
     <Project/>
     <Contact/>
     
    </div>
    
  );
}

export default App;
