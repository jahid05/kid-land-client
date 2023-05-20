import { useEffect, useState } from "react";
import AllProducts from "../AllProducts/AllProducts";
import Contact from "../Contact/Contact";
import Gallery from "../Gallery/Gallery";
import Banner from "./Banner/Banner";
import Feature from "./Feature/Feature";
import CommnonLoader from "../Shared/CommonLoader/CommnonLoader";

const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 500);
  
      // Clean up the timeout on component unmount
      return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="font-custom-100">
      {loading && <CommnonLoader></CommnonLoader>}
      <Banner></Banner>
      <Feature></Feature>
      <AllProducts></AllProducts>
      <Gallery></Gallery>
      <Contact></Contact>
    </div>
  );
};

export default Home;
