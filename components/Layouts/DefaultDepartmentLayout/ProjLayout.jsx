import React, { useState } from "react";
import styles from "./DefaultDepartmentLayout.module.scss";
import ProjImageComponent from "./ProjImageComponent";
import Slider from "react-slick";

const ProjLayout = (props) => {
  const project = props.project;
  const [currentImageIndex, setCurrentImageIndex] = useState(3);
  //const projectOddIndex = props.project.id % 2 == 1;
  const projectIndex = props.index;
  const projectOddIndex = projectIndex % 2 == 1;

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
      {/* <div className={styles.blank} /> */}
      <ProjImageComponent project={project} />
      <div className={styles.detailcontainer}>
        <div className={styles.projectNumberingRow}>
          {/* <div className={styles.projectNumberingLineOdd}>
            <h1>________________________</h1>
          </div> */}
          <div className={styles.projectNumberingTextOdd}>
            <h2>Project {projectIndex + 1}</h2>
          </div>
        </div>
        <div className={styles.projecttitle}>
          <h3>{project.title}</h3>
          {/* Changed to a single para now instead of an array of strings */}
          <div className={styles.projectdetailtext}>{project.details}</div>
        </div>
      </div>
    </div>
  );

  const renderEvenProj = () => (
    <div className={styles.projectcontainer}>
      {/* <div className={styles.blank}></div> */}

      <div className={styles.detailcontainerleft}>
        <div className={styles.projectNumberingRow}>
          <div className={styles.projectNumberingTextEven}>
            {/* We use the word Event for operations department */}
            {props.deptId == 1 && <h2>Event {projectIndex + 1}</h2>}
            {props.deptId != 1 && <h2>Project {projectIndex + 1}</h2>}
          </div>
          {/* <div className={styles.projectNumberingLineEven}>
            <h1>________________________</h1>
          </div> */}
        </div>
        <div className={styles.projecttitle}>
          <h3>{project.title}</h3>
          <div className={styles.projectdetailtext}>{project.details}</div>
        </div>
      </div>
      <ProjImageComponent project={project} />
    </div>
  );

  return projectOddIndex ? renderOddProj() : renderEvenProj();
};

export default ProjLayout;
