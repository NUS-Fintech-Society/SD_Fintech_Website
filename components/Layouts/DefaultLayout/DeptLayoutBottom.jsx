//npm i react-alice-carousel --save

//https://medium.com/how-to-react/create-beautiful-image-sliders-carousels-in-react-using-react-alice-carousel-395d8ae9310c
//this shows how to transition to different images https://stackoverflow.com/questions/57107633/changing-an-image-on-in-time-interval-using-react 
//https://morioh.com/p/396088a987f2

import React, { Fragment, useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import Head from "next/head";
import styles from "./DefaultLayout.module.scss";

import NavBar from "components/NavBar/NavBar";
import Footer from "components/Footer/Footer";
import SideDrawer from "components/SideDrawer/SideDrawer"
import Backdrop from "components/Backdrop/Backdrop";

import { Carousel } from 'react-bootstrap';

const DeptLayoutBottom = (props) => {

    const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);

    const drawerToggleClickHandler = () => {
        setIsSideDrawerOpen(!isSideDrawerOpen);
    };

    const backDropClickHandler = () => {
        setIsSideDrawerOpen(false);
    };


    const [images, setImages] = useState([
        // <img src={'https://edit.co.uk/uploads/2016/12/Image-1-Alternatives-to-stock-photography-Thinkstock.jpg'} className="sliderimg" />,
        <img src={'images/picture1.jpeg'} className="sliderimg" />,
        <img src={'https://www.atomix.com.au/media/2017/07/StockPhotoBanner.jpg'} className="sliderimg" />,
        <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRl-OO3C8WSch8zgBizrw12_dYu-rAKPQ4jNw&usqp=CAU'} className="sliderimg" />
    ]);

    const [imageURLs, setImageURLs] = useState([
        'https://edit.co.uk/uploads/2016/12/Image-1-Alternatives-to-stock-photography-Thinkstock.jpg',
        'https://www.atomix.com.au/media/2017/07/StockPhotoBanner.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRl-OO3C8WSch8zgBizrw12_dYu-rAKPQ4jNw&usqp=CAU'
    ]);

    const [currentImageIndex, setCurrentImageIndex] = useState(2);

    const changeImage = (e) => {
        console.log('Item`s position after changes: ', e.item);
        if (e.item == 0) {
            console.log('0');
            setCurrentImageIndex(2);
        } else {
            setCurrentImageIndex(e.item - 1);
        }

    };

    return (
        // <AliceCarousel autoPlay autoPlayInterval="3000">
        //     <img src={'https://edit.co.uk/uploads/2016/12/Image-1-Alternatives-to-stock-photography-Thinkstock.jpg'} className="sliderimg" />
        //     <img src={'https://edit.co.uk/uploads/2016/12/Image-1-Alternatives-to-stock-photography-Thinkstock.jpg'} className="sliderimg" />
        //     <img src={'https://edit.co.uk/uploads/2016/12/Image-1-Alternatives-to-stock-photography-Thinkstock.jpg'} className="sliderimg" />
        // </AliceCarousel>

        //style={{display:'inline-block'}}

        <div className={styles.layout}>
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
                <div className="projectcontainer">
                    <div className="projectrowone">
                        <div className="carouselcontainer">
                            <img src={imageURLs[currentImageIndex]} className="previmg" />
                            <AliceCarousel infinite mouseTracking items={images} onSlideChanged={changeImage} animationType='fadeout' controlsStrategy='responsive' />
                        </div>
                        <div className="detailcontainer">
                            <div className="projecttitle">
                                <h2>________ Project 2</h2>
                            </div>
                            <div className="projectbody">
                                <h4>Sentiment Analysis on Financial News</h4>
                                <h5>1. Full end-to-end project from data extraction to data analysis to prediction</h5>
                                <h5>2. Interactive Dashboard</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>

        // <Fragment>
        //     <img src={imageURLs[currentImageIndex]} className="previmg" />
        //     <AliceCarousel infinite mouseTracking items={images} onSlideChanged={changeImage} />
        // </Fragment>
    )
}

export default DeptLayoutBottom;


