import { useEffect, useState } from "react";
import Product from "./Product";

import CommnonLoader from "../Shared/CommonLoader/CommnonLoader";



const AllProducts = () => {
  const [toyCollection, setToyCollection] = useState([])
  const [loading, setLoading] = useState(false);


  useEffect(() =>{
    setLoading(true)
    fetch('https://kids-land.vercel.app/collection')
    .then(res => res.json())
    .then(data => {
      setToyCollection(data)
      setLoading(false)
    })
  },[])
  
  return (
    <div className="container mx-auto py-10">
      <div className="text-center">
        <h1 className="font-custom-200 inline-block text-2xl md:text-5xl border-b-4 border-theme-100 px-6">
          All Products
        </h1>
      </div>
      {
        loading && <CommnonLoader></CommnonLoader>

      }
      <div className="grid md:grid-cols-2 lg:grid-cols-4 mx-auto gap-6 py-24 px-4">
        {
        toyCollection && toyCollection.map( toyCard => <Product key={toyCard._id} toyCard={toyCard} ></Product> )
      
      }
      </div>
    </div>
  );
};

export default AllProducts;
