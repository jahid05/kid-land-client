import img from "../../../../assets/images/kids.png";
const Banner = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img  src={img} className="rounded-lg md:w-2/4" />
        <div  className="space-y-5">
          <h3 className="text-theme-100 font-bold md:text-2xl">
            Latest Collection
          </h3>
          <h1 className="md:text-7xl text-4xl font-custom-200 font-extrabold">
            Baby & Toddler <br /> Toys at Best <br />
            <span className="text-theme-100 text-9xl"> 25%</span> Off
          </h1>
          <p className="text-lg text-theme-300">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn bg-theme-100 border-none px-9 rounded-full">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
