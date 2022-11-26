import React from "react";

const FeaturedProducts = ({ category }) => {
  const { _id, name, img } = category;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img style={{height:'200px'}} src={img} alt="" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <div className="card-actions">
          <button className="btn btn-outline btn-error">See More</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;