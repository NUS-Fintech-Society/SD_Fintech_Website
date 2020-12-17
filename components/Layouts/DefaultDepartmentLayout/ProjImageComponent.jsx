import React, { useState, useEffect } from "react";
import styles from "./DefaultDepartmentLayout.module.scss";
import Slider from "react-slick";

const ProjImageComponent = (props) => {
  const project = props.project;
  const [currentImageIndex, setCurrentImageIndex] = useState(3);

  useEffect(() => {
      console.log('project printing below:');
      console.log(project);
  }, []);

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
        setCurrentImageIndex(3);
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

  return (
    <div className={styles.carouselcontainer}>
      <img
        src={project.imageURLs[currentImageIndex]}
        className={styles.previmg}
      />
      <div className={styles.SlickCarousel} style={{ padding: 24 }}>
        <Slider {...settings}>
          {project.carouselArray.map((photo) => {
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
};

export default ProjImageComponent;
