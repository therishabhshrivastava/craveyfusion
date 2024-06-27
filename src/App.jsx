import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar";
import Home from './Components/Home';
import Work from './Components/Work';
import About from './Components/About';
import Testimonial from './Components/Testimonial';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
