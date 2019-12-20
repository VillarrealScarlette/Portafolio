import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AboutMe from './views/AboutMe'
import Projects from './views/Projects';
import Contact from './views/Contact';

function App() {
  return (
    <div className="App">
      <nav>
        <Navbar/>
      </nav>
      <body>
        <AboutMe/>
        <Projects/>
        <Contact/>
      </body>
    </div>
  );
}

export default App;
