
import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import ReactPlayer from "react-player";
import avoidMultipleDecimals from "../../assets/Videos/Can't have multiple deimals and operators.mp4";
import runThrough from "../../assets/Videos/Operators and all clear.mp4";
import replacing from "../../assets/Videos/Replaing results.mp4";
import design from "../../assets/Images/Calculator.png"

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

function MoreInfoCalculator() {
  const moreInfoArray = [
    {
      type: "image",
      media: design,
      alt: "Image of a to do list",
      description:
        "This is the layout of my Calculator from here you can perform various arithmetic operations",
    },
    {
      type: "video",
      media: runThrough,
      description:
        "This is a video of the calculator in action showing the use of different operators and the clear button",
    },
    {
      type: "video",
      media: replacing,
      description:
        "The calculator allows to replace a result by pressing a digit it will also replace 0 with a desired number",
    },
    {
      type: "video",
      media: avoidMultipleDecimals,
      description:
        "The calculator will not allow you to place multiple decimals in the same number it will also set '0.' when just the decimal is pressed , You can also not start a number with 00 at the start of a number",
    },
    
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

export default MoreInfoCalculator;
