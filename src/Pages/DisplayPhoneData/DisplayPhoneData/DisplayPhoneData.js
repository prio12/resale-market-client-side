import React from 'react';

const DisplayPhoneData = ({data}) => {
    const {_id,name,image,loaction,resalePrice,originalPrice,used,time,sellerName} = data;
    return (
        <div className="card shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
    );
};

export default DisplayPhoneData;