import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import ReactPlayer from "react-player";
import image from '../../assets/Images/Image.png'
import comment from '../../assets/Images/comments front-end.png'
import review from '../../assets/Images/Front end individual review.png'

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

function MoreInfoFrontEnd() {
  const moreInfoArray = [
   {
    type: "image",
    media: image,
    alt: "Image of a to do list",
    description:
      "This is the homepage where you can see the comments for each board game and click on a game's name to view more details about it.",
   },
   {
     type: "image",
     media: review,
     alt: "Image of a to do list",
     description:
     "This page is dedicated to reviews for specific board games. Here, you can see details like the post's creation date and author. You also have the option to vote on the review and scroll down or use the button at the top to see related comments.",
    },
    {
     type: "image",
     media: comment,
     alt: "Image of a to do list",
     description:
       "I encountered challenges while working on this project, especially when using axios to fetch data from an API for the first time. Additionally, I aimed to enhance my CSS skills during the development. I'm still working on refining certain aspects of the project, and I'm planning to make further improvements soon.",
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

export default MoreInfoFrontEnd;
