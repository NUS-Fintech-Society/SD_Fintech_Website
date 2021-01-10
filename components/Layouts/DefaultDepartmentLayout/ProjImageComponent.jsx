import React, { useState } from "react";
import styles from "./DefaultDepartmentLayout.module.scss";
import Slider from "react-slick";

const ProjImageComponent = (props) => {
  const project = props.project;
  const imageCount = project.imageUrls.length;
  const [currentImageIndex, setCurrentImageIndex] = useState(imageCount - 1);

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    className: "slides",
    beforeChange: (current, next) => {
      if (next == 0) {
        setCurrentImageIndex(imageCount - 1);
      } else {
        setCurrentImageIndex(next - 1);
      }
    },
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "grey",
          marginTop: "38%",
        }}
        onClick={onClick}
      />
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "grey",
          marginTop: "38%",
        }}
        onClick={onClick}
      />
    );
  }

  const carouselComponent = () => (
    <div className={styles.carouselcontainer}>
        <Slider {...settings}>
          {project.imageUrls.map((photo) => {
            return (
              <div>
                <img width="100%" src={photo.url} />
              </div>
            );
          })}
        </Slider>
    </div>
  );

  const imageComponent = () => (
    <div className={styles.carouselcontainer}>
      <img
        //this is to generate a default photo for when no image is added
        src={
          imageCount != 0
            ? project.imageUrls[imageCount - 1].url
            : "https://i.imgur.com/LRTL24O.jpeg"
        }
        style={{
          width: "100%",
        }}
      />
    </div>
  );

  if (imageCount > 1) {
    return carouselComponent();
  }

  return imageComponent();
};

export default ProjImageComponent;
