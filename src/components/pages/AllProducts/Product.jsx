import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Product = ({toyCard}) => {
    
    return (
        <div  className="card   shadow-2xl">
            <figure className="h-52 ">
              <img src={toyCard.picture} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{toyCard.name}</h2>
              <p className="text-lg font-semibold">
                Price:{" "}
                <del className="text-slate-400 px-2">${toyCard.off_price}</del>{" "}
                ${toyCard.price}
              </p>
              <div className="rating py-2">
                <p className="text-theme-100 inline-flex items-center font-semibold text-xl">
                  <FaStar/> <span className="px-3 ">{toyCard.rating}</span></p>
              </div>
              <div className="card-actions justify-end">
                <Link to={`/toyDetails/${toyCard._id}`} className="btn bg-theme-100 border-none rounded-full normal-case">
                  View Details
                </Link>
              </div>
            </div>
          </div>
    );
};

export default Product;