import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './views/Home'
import AboutMe from './views/AboutMe'
import Projects from './views/Projects';
import Contact from './views/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home/>
      </header>
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
