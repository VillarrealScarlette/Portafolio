import React from 'react';
import './App.css';
import Navigation from './components/Navbar';
import AboutMe from './views/AboutMe'
import Projects from './views/Projects';
import Contact from './views/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <nav>
        <Navigation/>
      </nav>
      <body>
        <AboutMe/>
        <Projects/>
        <Contact/>
      </body>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
