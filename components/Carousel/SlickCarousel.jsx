import React, { useState, useEffect, Component } from 'react';
import Slider from "react-slick";
import Head from "next/head";
import styles from "./DefaultLayout.module.scss";

import NavBar from "components/NavBar/NavBar";
import Footer from "components/Footer/Footer";
import SideDrawer from "components/SideDrawer/SideDrawer"
import Backdrop from "components/Backdrop/Backdrop";


//https://www.freakyjolly.com/react-slick-carousel-with-custom-navigation-and-lazy-loaded-images-in-slider/

const SlickCarousel = (props) => {

    //Header Things
    const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);

    const drawerToggleClickHandler = () => {
        setIsSideDrawerOpen(!isSideDrawerOpen);
    };

    const backDropClickHandler = () => {
        setIsSideDrawerOpen(false);
    };

    const [currentImageIndex, setCurrentImageIndex] = useState(2);
    const [currentImageIndexTwo, setCurrentImageIndexTwo] = useState(2);

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
            url: 'https://images.unsplash.com/photo-1596006889651-0cfd9863d722?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
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
        console.log('CLASS NAME NEXT PRINTING');
        console.log(className);
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
        console.log('CLASS NAME PREV PRINTING');
        console.log(className);
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "grey", marginTop: '38%' }}
                onClick={onClick}
            />
        );
    }

    // function Arrow(props) {
    //     let className = props.type === "next" ? "nextArrow" : "prevArrow";
    //     className += " arrow";
    //     const char = props.type === "next" ? "👉" : "👈";
    //     return (
    //         <span className={className} onClick={props.onClick}>
    //             {char}
    //         </span>
    //     );
    // }

    return (
        <div className={styles.layout} >
            <Head>
                <link
                    href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900"
                    rel="stylesheet"
                />
                <title>NUS FinTech Society</title>
            </Head>
            <NavBar drawerClickHandler={drawerToggleClickHandler} />
            <SideDrawer show={isSideDrawerOpen} />
            <div>
                {isSideDrawerOpen && <Backdrop click={backDropClickHandler}></Backdrop>}
            </div>
            <main style={{ marginTop: '64px' }}>

                {/* PROJECT 1 */}
                <div className="projectcontainer">
                    <div className="carouselcontainer">
                        <img src={imageURLs[currentImageIndex]} className="previmg" />
                        <div className="SlickCarousel"
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
                    <div className="detailcontainer">
                        <div className="projecttitle">
                            <h1>________________ Project 1</h1>
                        </div>
                        <div className="projectbody">
                            <h4>Sentiment Analysis on Financial News</h4>
                            <h5>1. Full end-to-end project from data extraction to data analysis to prediction</h5>
                            <h5>2. Interactive Dashboard</h5>
                        </div>
                        <div style={{ clear: "both" }}></div>
                    </div>
                </div>

                <div style={{ clear: "both" }}></div>
                {/* PROJECT 2 */}

                <div className="projectcontainer" >
                    <div className="detailcontainerleft">
                        <div className="projecttitle">
                            <h1>Project 2 ________________ </h1>
                        </div>
                        <div className="projectbody">
                            <h4>Sentiment Analysis on Financial News</h4>
                            <h5>1. Full end-to-end project from data extraction to data analysis to prediction</h5>
                            <h5>2. Interactive Dashboard</h5>
                        </div>
                    </div>
                    <div className="carouselcontainer">
                        <img src={imageURLsTwo[currentImageIndexTwo]} className="previmg" />
                        <div className="SlickCarousel"
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
                    </div>

                </div>
            </main>
            <Footer />
        </div >
    )
}

export default SlickCarousel;