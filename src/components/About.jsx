import React from 'react';
import Tech from './Tech';
import './About.css'

const About = () => {
  return (
    <div id="about">
     <section className="about">
    <h2 className="section-heading">About Me</h2>
    <p>
      Hi, I'm Glen, a junior software developer with a passion for creativity. I completed Northcoders' intensive 13-week bootcamp. Through this experience, I've transformed my passion for technology into practical coding skills. This portfolio reflects my journey and commitment to the world of coding.
    </p>
    <p>
      Throughout the bootcamp, I immersed myself in different programming languages and technologies, with a primary focus on JavaScript. I took on both front-end and back-end projects. I enjoy problem-solving, and tackling these projects helped me improve my problem-solving ability.
    </p>
    <p>
      One highlight of the bootcamp was test-driven development (TDD). This approach not only refined my coding skills but also helped me be disciplined and methodical when it comes to creating software.
    </p>
    <p>Feel free to check out my portfolio of projects, where I showcase my coding journey and the work I've accomplished.</p>
    <a
      href="https://github.com/ggr1992"
      target="_blank"
      rel="noopener noreferrer"
      className="App-link"
    >
      Check out my GitHub profile to see some of my work!
    </a>
    <br></br>
    <a
      href="https://www.linkedin.com/in/glen-robotham-a537bb27a/"
      target="_blank"
      rel="noopener noreferrer"
      className="App-link"
    >
      Let's connect on LinkedIn!
    </a>
    
    <Tech />
  </section>
  </div>
  );
};

export default About;