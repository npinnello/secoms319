import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom/dist';

function App() {

  return (
    <div>
      <Header />
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/reviews" element={<Reviews/>}/>
          <Route exact path="/gallery" element={<Gallery/>}/>
        </Routes>
      {/* <Homepage /> */}
      <Footer />
    </div>
  );
}

export default App;
