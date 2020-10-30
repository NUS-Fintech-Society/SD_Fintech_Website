import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "./DefaultDepartmentLayout.module.scss";

import NavBar from "components/NavBar/NavBar";
import Footer from "components/Footer/Footer";

import Slider from "react-slick";
import departmentData from "data/departmentData";

const DefaultDepartmentLayout = (props) => {

  const [currentImageIndex, setCurrentImageIndex] = useState(3);
  const [currentImageIndexTwo, setCurrentImageIndexTwo] = useState(3);

  const [projectIndex, setProjectIndex] = useState(0);

  useEffect(() => {
    console.log('printing the project ID');
    console.log(props.children);
    setProjectIndex(props.children);
  });

  const changeImage = (e) => {
    console.log('Item`s position after changes: ', e.item);
    if (e.item == 0) {
      console.log('0');
      setCurrentImageIndex(2);
    } else {
      setCurrentImageIndex(e.item - 1);
    }
  };

  const changeImageTwo = (e) => {
    console.log('Item`s position after changes: ', e.item);
    if (e.item == 0) {
      console.log('0');
      setCurrentImageIndexTwo(2);
    } else {
      setCurrentImageIndexTwo(e.item - 1);
    }
  };


  //Carousel 1
  const photos = [
    {
      name: 'Photo 1',
      url: 'https://images.unsplash.com/photo-1554744512-d6c603f27c54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'Photo 2',
      url: 'https://images.unsplash.com/photo-1538592116845-119a3974c958?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'Photo 3',
      url: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'Photo 4',
      url: 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    }
  ]

  //Image Carousel 1
  const [imageURLs, setImageURLs] = useState([
    'https://images.unsplash.com/photo-1554744512-d6c603f27c54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1538592116845-119a3974c958?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1536700503339-1e4b06520771?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  ]);


  //Carousel 2
  const photosTwo = [
    {
      name: 'Photo 1',
      // url: 'https://images.unsplash.com/photo-1596006889651-0cfd9863d722?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
      url: 'https://i.imgur.com/yAcIkqy.jpg'
    },
    {
      name: 'Photo 2',
      url: 'https://images.unsplash.com/photo-1558368718-808f08b6d9a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'Photo 3',
      url: 'https://images.unsplash.com/photo-1572191267783-5618f992aff5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'Photo 4',
      url: 'https://images.unsplash.com/photo-1554744512-783e8dc69b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    }
  ]

  //Image Carousel 2
  const [imageURLsTwo, setImageURLsTwo] = useState([
    'https://images.unsplash.com/photo-1596006889651-0cfd9863d722?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1558368718-808f08b6d9a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1572191267783-5618f992aff5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1554744512-783e8dc69b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  ]);


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
        console.log('0');
        setCurrentImageIndex(3);
      } else {
        setCurrentImageIndex(next - 1);
        console.log('hello, new index is:' + next);
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
        console.log('0');
        setCurrentImageIndexTwo(3);
      } else {
        setCurrentImageIndexTwo(next - 1);
        console.log('hello, new index is:' + next);
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
          {props.children[0]}
        </div>
        <div className={styles.flex}>

          <div className={styles.blank}></div>
          <div className={styles.container}>
            <div className={styles.boxtitle}>
              <h3>Purpose</h3>
            </div>
            <div className={styles.boxbody}>
              {props.children[1]}
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
              {props.children[2]}
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
              <img src={imageURLs[currentImageIndex]} className={styles.previmg} />
              <div className={styles.SlickCarousel}
                style={{ padding: 24 }}>
                <Slider {...settings}>
                  {photos.map((photo) => {
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
                {/* <h3>Sentiment Analysis on Financial News</h3> */}
                {/* <h3>{props.children[3]}</h3> */}
                <h3>{departmentData[projectIndex].projectOne.title}</h3>
                {/* 1. Full end-to-end project from data extraction to data analysis to prediction */}
                {departmentData[projectIndex].projectOne.detailOne}
                <div>
                  {/* 2. Interactive Dashboard */}
                  {departmentData[projectIndex].projectOne.detailTwo}
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
              <h3>{departmentData[projectIndex].projectOne.title}</h3>
              <h3>{departmentData[projectIndex].projectOne.detailOne}</h3>
                <div>
                <h3>{departmentData[projectIndex].projectOne.detailTwo}</h3>
                </div>
              </div>
              <div style={{ clear: "both" }}></div>
            </div>
            <div className={styles.carouselcontainer}>
              <img src={imageURLsTwo[currentImageIndexTwo]} className={styles.previmg} />
              <div className={styles.SlickCarousel}
                style={{ padding: 24 }}>
                <Slider {...settingsTwo}>
                  {photosTwo.map((photo) => {
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
