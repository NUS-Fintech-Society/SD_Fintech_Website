import React, { useState } from "react";
import Head from "next/head";
import styles from "./DefaultDepartmentLayout.module.scss";

import NavBar from "components/NavBar/NavBar";
import Footer from "components/Footer/Footer";

import Slider from "react-slick";

const DefaultDepartmentLayout = (props) => {

  const [currentImageIndex, setCurrentImageIndex] = useState(3);
  const [currentImageIndexTwo, setCurrentImageIndexTwo] = useState(3);
  const [data, setData] = useState(props.department);


  const changeImage = (e) => {
    if (e.item == 0) {
      setCurrentImageIndex(2);
    } else {
      setCurrentImageIndex(e.item - 1);
    }
  };

  const changeImageTwo = (e) => {
    if (e.item == 0) {
      setCurrentImageIndexTwo(2);
    } else {
      setCurrentImageIndexTwo(e.item - 1);
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
          slidesToShow: 3
        }
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]

  };

  const settingsTwo = {
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
        setCurrentImageIndexTwo(3);
      } else {
        setCurrentImageIndexTwo(next - 1);
      }
    },
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 700,
        settings: {
          arrows: false,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]

  };


  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "grey", marginTop: '38%' }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "grey", marginTop: '38%' }}
        onClick={onClick}
      />
    );
  }


  return (
    <div>
      <Head>
        <title>NUS FinTech Society</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      <div className={styles.layout}>


        <div className={styles.title}>
          <h1>{data.deptName}</h1>
        </div>
        <div className={styles.flex}>

          <div className={styles.blank}></div>
          <div className={styles.container}>
            <div className={styles.boxtitle}>
              <h3>Purpose</h3>
            </div>
            <div className={styles.boxbody}>
              {data.purpose}
            </div>
            <hr className={styles.line}></hr>
            <div className={styles.imageleft}>
            </div>
          </div>

          <div className={styles.container}>
            <div className={styles.boxtitleright}>
              <h3>Goal</h3>
            </div>
            <div className={styles.boxbodyright}>
              {data.goal}
            </div>
            <hr className={styles.lineright}></hr>
            <div className={styles.image}>
            </div>
          </div>
          <div className={styles.blank}></div>

        </div>

        <div>



          {/* PROJECT 1 */}
          <div className={styles.projectcontainer}>
            <div className={styles.blank}></div>
            <div className={styles.carouselcontainer} >
              <img src={data.projectOne.imageURLs[currentImageIndex]} className={styles.previmg} />
              <div className={styles.SlickCarousel}
                style={{ padding: 24 }}>
                <Slider {...settings}>
                  {data.projectOne.carouselArray.map((photo) => {
                    return (
                      <div>
                        <img width="100%" src={photo.url} />
                      </div>
                    )
                  })}
                </Slider>
              </div>
              <div style={{ clear: "both" }}></div>
            </div>
            <div className={styles.detailcontainer}>
              <div className={styles.projecttitle}>
                <h1>________________ Project 1</h1>
              </div>
              <div className={styles.projecttitle}>
                <h3>{data.projectOne.title}</h3>
                {data.projectOne.detailOne}
                <div>
                  {data.projectOne.detailTwo}
                </div>
              </div>
              <div style={{ clear: "both" }}></div>
            </div>
            <div className={styles.blank}></div>
          </div>

          <div style={{ clear: "both" }}></div>


          {/* PROJECT 2 */}
          <div className={styles.projectcontainer} >

            <div className={styles.blank}></div>

            <div className={styles.detailcontainerleft}>
              <div className={styles.projecttitle}>
                <h1>Project 2 ________________ </h1>
              </div>
              <div className={styles.projecttitle}>
                <h3>{data.projectTwo.title}</h3>
                {data.projectTwo.detailOne}
                <div>
                  {data.projectTwo.detailTwo}
                </div>
              </div>
              <div style={{ clear: "both" }}></div>
            </div>
            <div className={styles.carouselcontainer}>
              <img src={data.projectTwo.imageURLs[currentImageIndexTwo]} className={styles.previmg} />
              <div className={styles.SlickCarousel}
                style={{ padding: 24 }}>
                <Slider {...settingsTwo}>
                  {data.projectTwo.carouselArray.map((photo) => {
                    return (
                      <div>
                        <img width="100%" src={photo.url} />
                      </div>
                    )
                  })}
                </Slider>
              </div>
              <div style={{ clear: "both" }}></div>
            </div>
            <div style={{ clear: "both" }}></div>
            <div className={styles.blank}></div>
          </div>
        </div>
      </div>
    </div >

  );
};



export default DefaultDepartmentLayout;
