import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
const AllProducts = () => {
  const [toyCollection, setToyCollection] = useState([])

  useEffect(() =>{
    fetch('http://localhost:2500/collection')
    .then(res => res.json())
    .then(data => setToyCollection(data))
  },[])
  
  return (
    <div className="container mx-auto py-10">
      <div className="text-center">
        <h1 className="font-custom-200 inline-block text-2xl md:text-5xl border-b-4 border-theme-100 px-6">
          All Products
        </h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 mx-auto gap-6 py-24">
        {
        toyCollection.map((toyCard) => (
          <div key={toyCard._id} className="card   shadow-2xl">
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
                <button className="btn bg-theme-100 border-none normal-case">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
