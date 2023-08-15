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
      "This is the home page from here you can view the amount of comments a board game has aswell as click on the name of a board game to navigate to a page displaying the information about that given board game.",
   },
   {
    type: "image",
    media: comment,
    alt: "Image of a to do list",
    description:
      "There were some blockers for this project as it was the first time I had used axios to fetch data from an API and I was trying also trying to improve my CSS skills during this project. I am still working on the aspects of this project so expect more to be added in the near future",
   },
   {
    type: "image",
    media: review,
    alt: "Image of a to do list",
    description:
      "This is the page for a review for an individual board game here you can view information such as when this post was created and the author of the post you can also vote on this review and scroll down or press the button at the top of the page to view comments related to this review",
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
