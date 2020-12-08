import React, { useState } from "react";
import styles from "./DefaultDepartmentLayout.module.scss";

import Slider from "react-slick";

const ProjLayout = (props) => {
  const project = props.project;
  const [currentImageIndex, setCurrentImageIndex] = useState(3);
  const projectOddIndex = props.project.id % 2 == 1;

  const changeImage = (e) => {
    if (e.item == 0) {
      setCurrentImageIndex(2);
    } else {
      setCurrentImageIndex(e.item - 1);
    }
  };

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

  const renderOddProj = () => (
    <div className={styles.projectcontainer}>
      <div className={styles.blank}></div>
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
        <div style={{ clear: "both" }}></div>
      </div>
      <div className={styles.detailcontainer}>
        <div className={styles.projecttitle}>
          <h1>_______________ Project {project.id}</h1>
        </div>
        <div className={styles.projecttitle}>
          <h3>{project.title}</h3>

          {project.details.map((detail) => {
            return <div style={{marginBottom:'3%'}}>{detail}</div>;
            //return <div style={{marginBottom:20}}>{detail}</div>;
          })}
        </div>
        <div style={{ clear: "both" }}></div>
      </div>
      <div className={styles.blank}></div>
    </div>
  );

  const renderEvenProj = () => (
    <div className={styles.projectcontainer}>
      <div className={styles.blank}></div>

      <div className={styles.detailcontainerleft}>
        <div className={styles.projecttitle}>
          <h1>Project {project.id} _____________ </h1>
        </div>
        <div className={styles.projecttitle}>
          <h3>{project.title}</h3>

          {project.details.map((detail) => {
            return <div style={{marginBottom:'3%'}}>{detail}</div>;
            //return <div style={{marginBottom:20}}>{detail}</div>;
          })}
        </div>
        <div style={{ clear: "both" }}></div>
      </div>
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
        <div style={{ clear: "both" }}></div>
      </div>
      <div style={{ clear: "both" }}></div>
      <div className={styles.blank}></div>
    </div>
  );

  return projectOddIndex ? renderOddProj() : renderEvenProj();
};

export default ProjLayout;
