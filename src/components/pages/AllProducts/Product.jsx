import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = ({ toyCard }) => {
  const {
    sellerName,
    sellerEmail,
    product,
    description,
    price,
    off_price,
    rating,
    picture,
    quantity,
    category,
    _id,
  } = toyCard;

  return (
    <div className="card   shadow-2xl">
      <figure className="h-52 ">
        <img src={picture} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product}</h2>
        <p className="text-lg font-semibold">
          Price:{""}
          <del className="text-slate-400 px-2">${off_price}</del> ${price}
        </p>
        <div className="rating py-2">
          <p className="text-theme-100 inline-flex items-center font-semibold text-xl">
            <FaStar /> <span className="px-3 ">{rating}</span>
          </p>
        </div>
        <div className="card-actions justify-end">
          <Link
            to={`/toyDetails/${_id}`}
            className="btn bg-theme-100 border-none rounded-full normal-case"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;

