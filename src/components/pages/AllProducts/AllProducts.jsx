import img from "../../../assets/jeep_4.png";
const AllProducts = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="text-center">
        <h1 className="font-custom-200 inline-block text-2xl md:text-5xl border-b-4 border-theme-100 px-6">
          Our Products
        </h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 mx-auto gap-6 py-24">
        <div className="card   shadow-2xl">
          <img src={img} alt="" />
          <div className="card-body">
            <h2 className="card-title">Free Shipping</h2>
            <p className="text-lg font-semibold">
              Price: <del className="text-slate-400 px-2">$500</del> $ 299
            </p>
            <div className="rating py-2">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <div className="card-actions justify-end">
                <button className="btn bg-theme-100 border-none normal-case">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card   shadow-2xl">
          <img src={img} alt="" />
          <div className="card-body">
            <h2 className="card-title">15 days returns</h2>
            <p className="text-lg font-semibold">
              Price: <del className="text-slate-400 px-2">$500</del> $ 299
            </p>
            <div className="rating py-2">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <div className="card-actions justify-end">
                <button className="btn bg-theme-100 border-none normal-case">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card   shadow-2xl">
          <img src={img} alt="" />
          <div className="card-body">
            <h2 className="card-title">Secure checkout</h2>
            <p className="text-lg font-semibold">
              Price: <del className="text-slate-400 px-2">$500</del> $ 299
            </p>
            <div className="rating py-2">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <div className="card-actions justify-end">
                <button className="btn bg-theme-100 border-none normal-case">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card  shadow-2xl">
          <img src={img} alt="" />
          <div className="card-body">
            <h2 className="card-title">Offer & gift here</h2>
            <p className="text-lg font-semibold">
              Price: <del className="text-slate-400 px-2">$500</del> $ 299
            </p>
            <div className="rating py-2">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <div className="card-actions justify-end">
                <button className="btn bg-theme-100 border-none normal-case">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
