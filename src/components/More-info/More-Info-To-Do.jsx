import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import ToDoListImage from "../../assets/Images/To-Do-List.png";
import ToDoListVideo from "../../assets/Videos/ToDo showase video.mp4";
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

function MoreInfoToDo() {
  const moreInfoArray = [
    {
      type: "image",
      media: ToDoListImage,
      alt: "Image of a to do list",
      description:
        "This is the layout of my ToDo-list. You can add tasks and remove them.",
    },
    {
      type: "video",
      media: ToDoListVideo,
      description:
        "Watch a video demonstration of the ToDo-list app in action.",
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

export default MoreInfoToDo;
