import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import ReactPlayer from "react-player";

import "../moreInfo.css";

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

function MoreInfoBackEnd() {
  const moreInfoArray = [
   
  ];

  const [isCarouselFolded, setIsCarouselFolded] = useState(true);

  const toggleCarousel = () => {
    setIsCarouselFolded(!isCarouselFolded);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="MoreInfo-container">
      <button className="fold-button" onClick={toggleCarousel}>
        {isCarouselFolded ? "More Info" : "Less Info"}
      </button>
      {!isCarouselFolded && (
        <div className="Carousel-container">
          <Slider {...settings}>
            {moreInfoArray.map((item, index) => (
              <div className="Media-wrapper" key={index}>
                {item.type === "image" ? (
                  <img src={item.media} alt={item.alt} className="Media" />
                ) : (
                  <div className="Centered-video">
                    <ReactPlayer
                      url={item.media}
                      controls
                      width="100%"
                      height="100%"
                      className="Video"
                    />
                  </div>
                )}
                <p className="Media-description">{item.description}</p>
              </div>
            ))}
          </Slider>
        </div>
      )}
      
    </div>
  );
}

export default MoreInfoBackEnd;
