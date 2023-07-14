import img from "../../../../assets/images/kids.png";
import card from "../../../../assets/images/visaCard.png";
import delivery from "../../../../assets/images/delivery.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="carousel w-full" data-aos-duration="1000">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img data-aos="fade-down-left" data-aos-duration="1000" src={img} className="rounded-lg md:w-2/4" />
            <div data-aos="fade-right" data-aos-duration="1000" className="space-y-5 lg:text-start text-center">
              <h3 className="text-theme-100 font-bold md:text-2xl text-xl">
                Latest Collection
              </h3>
              <h1 className="md:text-7xl text-4xl font-custom-200 font-extrabold">
                Baby & Toddler <br /> Toys at Best <br />
                <span className="text-theme-100 md:text-9xl"> 25%</span> Off
              </h1>
              <p className="md:text-lg text-theme-300">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <Link to="/allProducts"  className="btn normal-case bg-theme-100 border-none md:px-10 px-5 rounded-full">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle bg-theme-100 border-none">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle bg-theme-100 border-none">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img data-aos="fade-down-left" data-aos-duration="1000" src={delivery} className="rounded-lg md:w-2/4" />
            <div data-aos="fade-right" data-aos-duration="1000" className="space-y-5 lg:text-start text-center">
            
              <h1 className="md:text-7xl text-4xl font-custom-200 md:font-extrabold">
                <span className="text-theme-100 font-extrabold md:text-9xl text-5xl">Free delivery</span> <br></br>
                for the next seven 7 days
              </h1>
              <p className="md:text-lg text-theme-300">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <Link to="/allProducts"  className="btn normal-case bg-theme-100 border-none md:px-10 px-5 rounded-full">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle bg-theme-100 border-none">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle bg-theme-100 border-none">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img data-aos="fade-down-left" data-aos-duration="1000" src={card} className="rounded-lg md:w-2/4" />
            <div data-aos="fade-right" data-aos-duration="1000" className="space-y-5 lg:text-start text-center">
              <h3 className="text-theme-100 font-bold md:text-2xl text-lg">
                Special Discount
              </h3>
              <h1 className="md:text-7xl text-4xl font-custom-200 md:font-extrabold">
                <span className="text-theme-100 font-extrabold md:text-9xl text-6xl">15%</span> <br></br> Discount on
                Visa card payment
              </h1>
              <p className="md:text-lg text-theme-300">
                Ten percent discount shopping can be done with Visa card of all
                banks
              </p>
              <Link to="/allProducts"  className="btn normal-case bg-theme-100 border-none md:px-10 px-5 rounded-full">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle bg-theme-100 border-none">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle bg-theme-100 border-none">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
