import React from 'react';
import MoreInfoBackEnd from './More-info/More-info-back-end';


function BackEndProject () {
    return (
        <>
        <div className="Text-container">
        <h2 className="Heading2">Back-end Portfolio Project</h2>
        <p>In this backend project, I developed a robust and scalable API using the powerful combination of Express, Node.js, PostgreSQL, and Jest. The goal was to create a well-structured and efficient backend that could serve as the foundation to my front-end project.</p>
        <p>I followed a structured Test-Driven Development workflow. I started by writing failing tests for the desired behavior, then implemented the necessary code to make the tests pass.</p>
        <a href="https://github.com/ggr1992/Portfolio-project-be-games" target="_blank" rel="noopener noreferrer">
        View the Repo Here.
      </a>
        </div>
        {/* <MoreInfoBackEnd/> */}
        </>
    )
}

export default BackEndProject