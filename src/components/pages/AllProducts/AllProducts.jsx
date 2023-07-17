import { useEffect, useState } from "react";
import Product from "./Product";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./Style.css";
import CommnonLoader from "../Shared/CommonLoader/CommnonLoader";

const AllProducts = () => {
  const [toyCollection, setToyCollection] = useState([]);
  const [loading, setLoading] = useState(false);
  const [asc, setAsc] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://kids-land.vercel.app/collection?sort=${asc ? "asc" : "desc"}`
    )
      .then((res) => res.json())
      .then((data) => {
        setToyCollection(data);
        setLoading(false);
      });
  }, [asc]);

  return (
    <div className="container mx-auto py-10">
      <div className="text-center">
        <h1 className="font-custom-200 inline-block text-2xl md:text-5xl border-b-4 border-theme-100 px-6">
          Sub Category
        </h1>
      </div>

      {loading && <CommnonLoader></CommnonLoader>}
      <div className="flex justify-center py-5">
        <button
          onClick={() => setAsc(!asc)}
          className="btn border-none normal-case bg-theme-100"
        >
          {asc ? "High to Low" : "Low to High"}
        </button>
      </div>
      <div className="flex justify-center">
        <Tabs>
          <TabList className="font-semibold text-white text-center">
            <div className="">
            <Tab>All Toys</Tab>
            <Tab>Jeep</Tab>
            <Tab>Car</Tab>
            <Tab>Monster</Tab>
            </div>
          </TabList>

          <TabPanel>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 mx-auto gap-6 py-24 px-4">
              {toyCollection &&
                toyCollection.map((toyCard) => (
                  <Product key={toyCard._id} toyCard={toyCard}></Product>
                ))}
            </div>
            
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 mx-auto gap-6 py-24 px-4">
              {toyCollection &&
                toyCollection.filter(toy => toy.category.toLowerCase() === "jeep").map((toyCard) => (
                  <Product key={toyCard._id} toyCard={toyCard}></Product>
                ))}
            </div>
          </TabPanel>
          <TabPanel>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 mx-auto gap-6 py-24 px-4">
              {toyCollection &&
                toyCollection.filter(toy => toy.category.toLowerCase() === "car").map((toyCard) => (
                  <Product key={toyCard._id} toyCard={toyCard}></Product>
                ))}
            </div>
          </TabPanel>
          <TabPanel>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 mx-auto gap-6 py-24 px-4">
              {toyCollection &&
                toyCollection.filter(toy => toy.category.toLowerCase() === "monster").map((toyCard) => (
                  <Product key={toyCard._id} toyCard={toyCard}></Product>
                ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default AllProducts;
