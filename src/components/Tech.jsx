import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import javaScriptLogo from '../assets/Images/JavaScript-logo.png';
import nodeAndExpress from '../assets/Images/NodeAndExpress.png';
import reactLogo from '../assets/Images/react-logo.jpg';
import postgreSQLLogo from '../assets/Images/PostgreSQL.jpg';
import fireBaseLogo from '../assets/Images/Firebase.png';
import HTMLAndCSSLogo from '../assets/Images/HTML-CSS.png';
import ReactNativeLogo from '../assets/Images/React-native.png';
import TypescriptLogo from '../assets/Images/Typescript.png';
import Jest from '../assets/Images/Jest.png';
import './Tech.css'

const CustomPrevArrow = ({ onClick }) => (
    <button className="custom-arrow prev-arrow" onClick={onClick}>
      &lt; 
    </button>
  );
  
  
  const CustomNextArrow = ({ onClick }) => (
    <button className="custom-arrow next-arrow" onClick={onClick}>
      &gt; 
    </button>
  );


function Tech() {
 
  const techs = [
    {
      logo: javaScriptLogo,
      alt: 'JavaScript Logo',
      description: 'JavaScript: Versatile scripting language for web development and beyond.',
    },
    {
      logo: nodeAndExpress,
      alt: 'Node.js and Express Logo',
      description: 'Node.js: Runtime for server-side JavaScript; Express: Minimalist web framework for backend development.',
    },
    {
      logo: reactLogo,
      alt: 'React Logo',
      description: 'React: Declarative JavaScript library for building interactive user interfaces.',
    },
    {
      logo: postgreSQLLogo,
      alt: 'PostgreSQL Logo',
      description: 'PostgreSQL: A powerful open-source relational database.',
    },
    {
      logo: fireBaseLogo,
      alt: 'Firebase Logo',
      description: 'Firebase: Building real-time apps with authentication and database.',
    },
    {
      logo: HTMLAndCSSLogo,
      alt: 'HTML and CSS Logo',
      description: 'HTML: Markup language for structuring web content; CSS: Stylesheet language for designing the presentation and layout of web pages.',
    },
    {
      logo: ReactNativeLogo,
      alt: 'React Native Logo',
      description: 'React Native: Build native mobile apps with JavaScript and React.',
    },
    {
      logo: TypescriptLogo,
      alt: 'TypeScript Logo',
      description: 'TypeScript: Statically typed JavaScript with optional types for improved code quality.',
    },
    {
      logo: Jest,
      alt: 'Jest Logo',
      description: 'Jest: JavaScript testing framework for simple and efficient unit testing.',
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: window.innerWidth >= 768 ? 5 : 1, 
    slidesToScroll: window.innerWidth >= 768 ? 3 : 1, 
    prevArrow: <CustomPrevArrow />, 
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className='Carousel-container'>
      <h2 className='section-heading' >Technical Skills</h2>
      <p>I have a varying amount of experience in the following Techs:</p>
      <Slider {...settings}>
      {techs.map((tech, index) => (
          <div key={index}>
            <img src={tech.logo} alt={tech.alt} className="Logo" />
            <p className="Tech-description">{tech.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Tech;