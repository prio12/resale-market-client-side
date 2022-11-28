import React from "react";

import img3 from '../../assets/images/slider/image3.jpg'
import img4 from '../../assets/images/slider/image7.jpg'
import img5 from '../../assets/images/slider/image8.jpg'

const Slider = () => {
  return (
    <div className="mt-12">
        <div className="carousel w-full"  >
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img3} alt="" style={{ width: "100%",  height: "500px" }}/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img4} alt="" style={{ width: "100%",  height: "500px" }} />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img5} alt="" style={{ width: "100%", height: "500px" }} />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      
    </div>
    </div>
  );
};

export default Slider;
