import { useEffect, useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import CommnonLoader from "../Shared/CommonLoader/CommnonLoader";

const AllToys = () => {
  const [toyCollection, setToyCollection] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://kids-land.vercel.app/collection")
      .then((res) => res.json())
      .then((data) => {
        data?.slice(0, 5);
        setToyCollection(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-col font-custom-100 p-4 space-y-4  container mx-auto  text-black">
      {loading && <CommnonLoader></CommnonLoader>}
      <div className="flex justify-end">
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button className="btn bg-theme-100 border-none btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Toy Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {toyCollection.map((allToy) => (
            <tr key={allToy._id}>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask w-16 h-16">
                      <img src={allToy.picture} />
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">
                      {allToy.product}
                    </div>
                    <div className="text-sm opacity-50">
                      {allToy.sellerName}
                    </div>
                  </div>
                </div>
              </td>
              <td className="text-sm">
                $ {allToy.price}
                <br />
                <span className="badge badge-ghost badge-sm">
                  <del>$ {allToy.off_price}</del>
                </span>
              </td>
              <td className="text-sm">{allToy.quantity}</td>

              <td className="text-xs">
                {/* <p>{addToy.description.length  >= 50? `${addToy.description.slice(0, 48)}... More` : addToy.description }</p> */}
                <div className="w-52  overflow-y-scroll">
                  <p>{allToy.description}</p>
                </div>
              </td>
              <td>
                <div className="">
                  <Link className="ms-1 btn btn-warning btn-xs">
                    <FaPen></FaPen>
                  </Link>
                  <button
                    // onClick={() => deleteHandle(allToy._id)}
                    className="ms-1 btn btn-error btn-xs"
                  >
                    <FaTrash></FaTrash>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th>Toy Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default AllToys;
