import React from 'react';
import image from '../../resources/hero.jpg'
import image2 from '../../resources/hero2.jpg'
import image3 from '../../resources/hero3.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './shared.scss';
const Hero = () => {

 const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000
 }
 return (
  <div className="hero">
   <div className="hero--image" style={{ backgroundImage: `url(${image})` }}></div>
   {/* <Slider {...settings}>

    <img src={image} alt="image 1" />
    <img src={image2} alt="image 1" />
    <img src={image3} alt="image 1" />


   </Slider> */}
   <div className="hero--content">
    <div className="site-logo">
     <h1>searchies</h1>
    </div>
   </div>
  </div>
 )
}
export default Hero; 