import React from 'react';
import MoreWeather from './More-info/More-info-Weather';

function WeatherApp() {
    return (
      <>
        <div className="Text-container">
          <h2 className="Heading2">Weather App</h2>
          <p>
           This weather app allows a user to search by location and get accurate feedback of the weather in that location this was my first time using Angular and bootstrap and I can't wait to use these in further projects, This app uses the API openweathermap. 
          </p>
  
          <a
            href="https://github.com/ggr1992/Weather"
            target="_blank"
            rel="noopener noreferrer"
          >
            View the Repo Here.
          </a>
        <MoreWeather/>
        </div>
      </>
    );
  }
  export default WeatherApp;