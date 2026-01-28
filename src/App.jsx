import { motion } from "motion/react"
import { Menu } from 'lucide-react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Form from "./pages/Form";
import Services from "./pages/Services";
import End from "./components/end";
import Scrolling from "./pages/Scrolling";


function App() {
  return (
     <div className="w-full min-h-screen overflow-x-hidden">
    <BrowserRouter>

  
      <Navbar />

      <Routes>
     <Route path ="/" element= {<Scrolling />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} />
        <Route path="/services" element={<Services />} />
        <Route path="/end" element={<End />} />
      </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;
