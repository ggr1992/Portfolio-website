import './App.css'
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';
import { Routes,Route } from 'react-router-dom'
import { useState, useEffect } from 'react';
import './styles.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMoving, setIsMoving] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsMoving(true);
      } else {
        setIsMoving(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="app">
      <button className={`open-sidebar-button ${isMoving ? 'moving-button' : ''}`} onClick={toggleSidebar}>
        ☰
      </button>
      <Header />
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <Routes>
        <Route path='/' element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;

