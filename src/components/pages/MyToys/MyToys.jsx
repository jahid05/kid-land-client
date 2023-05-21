import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/Auth/AuthProvider";
import { FaPen, FaTrash } from "react-icons/fa";

const MyToys = () => {
    const {user} = useContext(AuthContext);

    const uid = user?.uid;

    const [data, setData] = useState([0]);

    const fetchData = (uid) => {
        fetch(`https://kids-land.vercel.app/myToys/${uid}`)
          .then(res => res.json())
          .then(data => setData(data))
      }
      
      useEffect(() => {
        fetchData(uid);
      }, [uid]);

      console.log(data);
      
    
  return (
    <div className="flex flex-col font-custom-100 p-4 space-y-4  container mx-auto lg:w-1/2  text-black">
      <ul className="flex flex-col divide-y divide-gray-700">
        {
            data?.map(myToy => (
                <li key={myToy._id} className="flex flex-col py-6 sm:flex-row sm:justify-between">
          <div className="flex w-full space-x-2 sm:space-x-4">
            <img
              className="flex-shrink-0  w-20 h-20 sm:w-32 sm:h-32"
              src={myToy.picture}
              alt="Polaroid camera"
            />
            <div className="flex flex-col justify-between w-full pb-4">
              <div className="flex justify-between w-full pb-2 space-x-2">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                    {myToy.name}
                  </h3>
                  {/* <p className="text-sm py-2">{myToy.description.length > 100 ? myToy.description.slice(0, 100) + "..." : myToy.description}</p> */}
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold">{myToy.price}$</p>
                  <p className="text-sm line-through ">
                    {myToy.off_price} $
                  </p>
                </div>
              </div>
              <div className="flex text-sm divide-x">
                <button
                  type="button"
                  className="flex items-center px-2 py-1 pl-0 space-x-1"
                >
                  <FaTrash></FaTrash>
                  <span>Remove</span>
                </button>
                <button
                  type="button"
                  className="flex items-center px-2 py-1 space-x-1"
                >
                    <FaPen></FaPen>
                  <span>Update</span>
                </button>
              </div>
            </div>
          </div>
        </li>
            ))
        }
        
      </ul>
      {/* <div className="space-y-1 text-right">
        <p>
          Total amount:
          <span className="font-semibold">357 €</span>
        </p>
        <p className="text-black">
          Not including taxes and shipping costs
        </p>
      </div>
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          className="px-6 py-2 border rounded-md bg-theme-100"
        >
          <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
        </button>
      </div> */}
    </div>
  );
};

export default MyToys;
