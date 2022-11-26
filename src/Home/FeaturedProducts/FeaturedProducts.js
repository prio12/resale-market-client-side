import React from "react";
import { Link } from "react-router-dom";

const FeaturedProducts = ({ category }) => {
  const { _id, name, img } = category;
  return (
    <div className="card  shadow-xl">
      <figure className="px-10 pt-10">
        <img style={{height:'200px'}} src={img} alt="" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <div className="card-actions">
          <Link to={`/collection/${_id}`}><button className="btn btn-outline ">See More</button></Link>
          </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
