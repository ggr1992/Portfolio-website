import React from 'react';
import MoreInfoCalculator from './More-info/More-info-Calculator';



function Calculator () {
    return (
        <>
        <div className="Text-container">
        <h2 className="Heading2">Calculator App</h2>
        <p>This Calculator was made using React, This interactive web app provides users with a smooth experience to easily perform various arithmetic operations. By featuring this project, I demonstrate my capability to create functional and user-centric applications, highlighting my expertise in front-end development and attention to detail when dealing with edge cases  ensuring a comprehensive user experience </p>

        <a href="https://github.com/ggr1992/MyCalculator" target="_blank" rel="noopener noreferrer">
        View the Repo Here.
      </a>
        </div>
        <MoreInfoCalculator/>
        </>
    )
}

export default Calculator