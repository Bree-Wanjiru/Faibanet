import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Newsletter from './components/Newsletter';
import Packages from './components/Packages';
import Footer from './components/Footer';




function App() {
  return (
    <div >
      <Navbar />
      <Hero />
      <About />
      <Newsletter />
      <Packages />
      <Footer />
    </div>
  );
}

export default App;
