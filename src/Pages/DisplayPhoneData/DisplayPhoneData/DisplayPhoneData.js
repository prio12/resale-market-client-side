import React from 'react';

const DisplayPhoneData = ({data}) => {
    const {_id,name,image,location,resalePrice,originalPrice,used,time,sellerName} = data;
    return (
        <div className="card shadow-xl">
  <figure><img src={image}  style={{height:'200px'}} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
    </h2>
    <p>Location: {location}</p>
    <p>Resale Price: {resalePrice}</p>
    <p>Original Price: {originalPrice}</p>
    <p>Used: {used} Years</p>
    <p>Seller Name: {sellerName} </p>
    <p>Posted for sale: {time} </p>
    <div className="card-actions justify-end">
    <button className="btn btn-outline btn-dark">Book Now</button>
    </div>
  </div>
</div>
    );
};

export default DisplayPhoneData;