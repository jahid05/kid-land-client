import AllProducts from "../AllProducts/AllProducts";
import Gallery from "../Gallery/Gallery";
import Banner from "./Banner/Banner";
import Feature from "./Feature/Feature";

const Home = () => {
    return (
        <div className="font-custom-100">
            <Banner></Banner>
            <Feature></Feature>
            <AllProducts></AllProducts>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;