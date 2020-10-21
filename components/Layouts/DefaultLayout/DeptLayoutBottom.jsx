//npm i react-alice-carousel --save
import AliceCarousel from 'react-alice-carousel';
//https://medium.com/how-to-react/create-beautiful-image-sliders-carousels-in-react-using-react-alice-carousel-395d8ae9310c
//this shows how to transition to different images https://stackoverflow.com/questions/57107633/changing-an-image-on-in-time-interval-using-react 
//https://morioh.com/p/396088a987f2

import React, { Fragment, useState, useEffect } from 'react';



const DeptLayoutBottom = () => {

    const [images, setImages] = useState([
        <img src={'https://edit.co.uk/uploads/2016/12/Image-1-Alternatives-to-stock-photography-Thinkstock.jpg'} className="sliderimg" />,
        <img src={'https://www.atomix.com.au/media/2017/07/StockPhotoBanner.jpg'} className="sliderimg" />,
        <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRl-OO3C8WSch8zgBizrw12_dYu-rAKPQ4jNw&usqp=CAU'} className="sliderimg" />
    ]);

    const [imageURLs, setImageURLs] = useState([
        'https://edit.co.uk/uploads/2016/12/Image-1-Alternatives-to-stock-photography-Thinkstock.jpg',
        'https://www.atomix.com.au/media/2017/07/StockPhotoBanner.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRl-OO3C8WSch8zgBizrw12_dYu-rAKPQ4jNw&usqp=CAU'
    ]);

    const [currentImageIndex,setCurrentImageIndex] = useState(2);

    const changeImage = (e) => {
        console.log('Item`s position after changes: ', e.item);
        if (e.item==0) {
            console.log('0');
            setCurrentImageIndex(2);
        } else {
            setCurrentImageIndex(e.item-1);
        }
        
    };

    return (
        // <AliceCarousel autoPlay autoPlayInterval="3000">
        //     <img src={'https://edit.co.uk/uploads/2016/12/Image-1-Alternatives-to-stock-photography-Thinkstock.jpg'} className="sliderimg" />
        //     <img src={'https://edit.co.uk/uploads/2016/12/Image-1-Alternatives-to-stock-photography-Thinkstock.jpg'} className="sliderimg" />
        //     <img src={'https://edit.co.uk/uploads/2016/12/Image-1-Alternatives-to-stock-photography-Thinkstock.jpg'} className="sliderimg" />
        // </AliceCarousel>
        <Fragment>
            <img src={imageURLs[currentImageIndex]} className="previmg"/> 
            <AliceCarousel infinite mouseTracking items={images} onSlideChanged={changeImage}/>
        </Fragment>
    )
}

export default DeptLayoutBottom;                  