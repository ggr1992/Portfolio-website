import React from 'react';
import '../Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose }) => {


  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-button" onClick={onClose}>
        {isOpen ? '☰' : '☰'} 
      </button>
     
      <nav>
      <Link to="/">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>

    </div>
  );
};

export default Sidebar;