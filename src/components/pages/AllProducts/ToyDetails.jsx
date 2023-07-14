import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const details = useLoaderData();
  console.log(details);

  return (
    <div className="container mx-auto h-screen">
      <div className="card lg:card-side lg:py-32">
        <figure className="p-12">
          <img src={details.picture} alt="Album" />
        </figure>
        <div className="card-body">
          <div className="">
            <h2 className="card-title md:text-2xl">{details.product}</h2>
            <p className="md:text-lg py-4">{details.description}</p>
            <p className="text-theme-100 inline-flex py-8 items-center font-semibold text-xl">
              <FaStar /> <span className="px-3 ">{details.rating}</span>
            </p>
            <img src={details.photoURL} />
            <h2>{details.displayName}</h2>
            <div className="flex">
              <div className="">
                <p className="font-semibold text-2xl">${details.price}</p>
                <p className="text-lg my-2">
                  <del>${details.off_price}</del>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
