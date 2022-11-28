import React from 'react';

const DisplayPhoneData = ({data,setBookingItem}) => {
    const {name,image,location,resalePrice,originalPrice,used,time,sellerName} = data;
    return (
        <div className="card shadow-xl featured-container">
  <figure><img src={image}  style={{height:'200px'}} alt="Shoes" /></figure>
  <div className="card-body text-center">
    <h2 className="text-center">
      {name}
    </h2>
    <p>Location: {location}</p>
    <p>Resale Price: {resalePrice}</p>
    <p>Original Price: {originalPrice}</p>
    <p>Used: {used} Years</p>
    <p>Seller Name: {sellerName} </p>
    <p>Posted for sale: {time} </p>
    <div className="card-actions justify-end">
    <label onClick={() =>setBookingItem(data)}
    htmlFor="booking-modal" className="btn btn-outline btn-dark">
      Book Now</label>
    </div>
  </div>
</div>
    );
};

export default DisplayPhoneData;