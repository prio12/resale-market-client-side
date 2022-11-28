import React from "react";
import img1 from '../../../assets/images/slider/image1.jpg'
import img2 from '../../../assets/images/slider/image5.jpg'
import img3 from '../../../assets/images/slider/image4.jpg'
const Review = () => {
  return (
    <div className='grid gap-3 my-20  grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <div>
      <div className="card ">
        <figure className="px-10 pt-10">
          <img
           style={{height:'200px'}}
            src={img1}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <p>I'm really satisfied with their service, i've bought my phone from here!</p>
        </div>
      </div>
    </div>
        <div>
      <div className="card ">
        <figure className="px-10 pt-10">
          <img
           style={{height:'200px'}}
            src={img2}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <p>Both of us have sold our phone through this site, and got ourself new one! </p>
        </div>
      </div>
    </div>
        <div>
      <div className="card ">
        <figure className="px-10 pt-10">
          <img
           style={{height:'200px'}}
            src={img3}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <p>YaYY!! Got my new phone!! What r u waiting for?</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Review;
