import React from 'react';
import image from '../../resources/hero.jpg'
import './shared.scss';
const Hero = () => {
 return (
  <div className="hero">
   <div className="hero--image" style={{ backgroundImage: `url(${image})` }}></div>
   <div className="hero--content"></div>
  </div>
 )
}
export default Hero; 