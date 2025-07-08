import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/footer';
import Projects from './pages/Projects';
import Library from "./pages/Library"
const App = () => {
  return (
    <div className="p-2 sm:px-5 md:px-8 lg:px-15 xl:px-20  bg-background text-text  min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} /> 
        <Route path="/library" element={<Library />} /> 
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
