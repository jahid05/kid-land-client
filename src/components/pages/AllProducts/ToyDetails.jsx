import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const details = useLoaderData();
  console.log(details);

  return (
    <div className="container mx-auto">
      <div className="card lg:card-side lg:py-24 py-12">
        <figure>
          <img src={details.picture} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{details.name}</h2>
          <p className="text-lg font-semibold">{details.description}</p>
          <div className="flex">
            <p className="text-lg font-semibold">${details.price}</p>
            <p className="text-theme-100 inline-flex items-center font-semibold text-xl">
              <FaStar /> <span className="px-3 ">{details.rating}</span>
            </p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn bg-theme-100 border-none rounded-full normal-case">Add Toy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
