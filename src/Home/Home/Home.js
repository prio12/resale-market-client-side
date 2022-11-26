import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AboutUs from '../AboutUs/AboutUs';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import Slider from '../slider/Slider';

const Home = () => {

  const categoryData = useLoaderData()
    return (
        <div>
          
          <Slider></Slider>
          <h3 className="text-4xl my-6 text-orange-600 text-center font-extrabold">Featured Products</h3>
          {/* <AboutUs></AboutUs> */}
          <div className='grid my-5 gap-3  grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {
            categoryData.map(category =><FeaturedProducts
            key={category._id}
            category={category}
            ></FeaturedProducts>)
          }
          </div>
          {/* <FeaturedProducts></FeaturedProducts>   */}
        </div>
    );
};

export default Home;