import React from 'react'; 
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router } from 'react-router-dom';
import Home from './pages';
import Section_2 from './pages/section2';
import Section3 from './pages/section3';
import Section4 from './pages/section4';
import Footer from './pages/footer'



 
function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <Section_2 />
      <Section3 />
      <Section4 />
      <Footer />
    </Router>
  );
}

export default App;
