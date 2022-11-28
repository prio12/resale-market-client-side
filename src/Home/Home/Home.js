import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AboutUs from '../AboutUs/AboutUs';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import Slider from '../slider/Slider';
import Review from './reviews/Review';

const Home = () => {

  const categoryData = useLoaderData()
    return (
        <div>
          
          <Slider></Slider>
          <AboutUs></AboutUs>
          <h3 className="text-4xl mt-20 text-center font-extrabold">Browse items by category</h3>
         
          <div className='grid gap-3 my-20  grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {
            categoryData.map(category =><FeaturedProducts
            key={category._id}
            category={category}
            ></FeaturedProducts>)
          }
          </div>
          <div>
             <h3 className="text-3xl font-bold text-center">Our happy Customers</h3>
          </div>
          <Review></Review>
           
        </div>
    );
};

export default Home;