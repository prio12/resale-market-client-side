import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import Slider from '../slider/Slider';

const Home = () => {
    return (
        <div>
          <Slider></Slider>
          <AboutUs></AboutUs>
          <FeaturedProducts></FeaturedProducts>  
        </div>
    );
};

export default Home;