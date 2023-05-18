import AllProducts from "../AllProducts/AllProducts";
import Banner from "./Banner/Banner";
import Feature from "./Feature/Feature";

const Home = () => {
    return (
        <div className="font-custom-100">
            <Banner></Banner>
            <Feature></Feature>
            <AllProducts></AllProducts>
        </div>
    );
};

export default Home;