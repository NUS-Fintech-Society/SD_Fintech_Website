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
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 700,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  function SampleNextArrow(props) {
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

  function SamplePrevArrow(props) {
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
      <img
        src={project.imageUrls[currentImageIndex].url}
        className={styles.previmg}
      />
      <div className={styles.SlickCarousel} style={{ padding: 24 }}>
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
      <div style={{ clear: "both" }} />
    </div>
  );

  const imageComponent = () => (
    <div className={styles.carouselcontainer}>
      <img
        src={project.imageUrls[imageCount-1].url}
        style={{
          width: "100%",
          //aspectRatio: "135/76", doesn't seem to change anything ? need to test more with more photos
        }}
      />
      {/* <div style={{ clear: "both" }} /> */}
    </div>
  );

  if (imageCount > 1) {
    return carouselComponent();
  }

  return imageComponent();
};

export default ProjImageComponent;
