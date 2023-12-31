import React from 'react';
import BackEndProject from './back-end-projects';
import './Projects.css';
import FrontEnd from './front-end-project';
import FinalProject from './final-group-project';
import ToDoListApp from './To-Do-List';
import Calculator from './Calculator';
import WeatherApp from './WeatherApp';

const Projects = () => {
  return (
  <div className='Projects'>
  <BackEndProject/>
  <FrontEnd/>
  <ToDoListApp/>
  <FinalProject/>
  <Calculator/>
  <WeatherApp/>
  </div>
  )
};

export default Projects;