import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/Auth/AuthProvider";
import { Link } from "react-router-dom";
import { FaPen, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";


const MyToys = () => {
  const { user } = useContext(AuthContext);

  const uid = user?.uid;

  const [data, setData] = useState([0]);

  


  const fetchData = (uid) => {
    fetch(`https://kids-land.vercel.app/myToys/${uid}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    fetchData(uid);
  }, [uid]);

  console.log(data);

  const deleteHandle = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://kids-land.vercel.app/toy-delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your coffee has been deleted.", "success");
              fetchData();
            }
          });
      }
    });
  };

  return (
    <div className="flex flex-col font-custom-100 p-4 space-y-4  container mx-auto  text-black">
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
          {data.map((addToy) => (
            <tr key={addToy._id}>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask w-16 h-16">
                      <img src={addToy.picture} />
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">
                      {addToy.product}
                    </div>
                    <div className="text-sm opacity-50">
                      {addToy.sellerName}
                    </div>
                  </div>
                </div>
              </td>
              <td className="text-sm">
                $ {addToy.price}
                <br />
                <span className="badge badge-ghost badge-sm">
                  <del>$ {addToy.off_price}</del>
                </span>
              </td>
              <td className="text-sm">{addToy.quantity}</td>

              <td className="text-xs">
                {/* <p>{addToy.description.length  >= 50? `${addToy.description.slice(0, 48)}... More` : addToy.description }</p> */}
                <div className="w-52  overflow-y-scroll">
                  <p>{addToy.description}</p>
                </div>
              </td>
              <td>
                <div className="">
                  <Link className="ms-1 btn btn-warning btn-xs">
                    <FaPen></FaPen>
                  </Link>
                  <button
                    onClick={() => deleteHandle(addToy._id)}
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

export default MyToys;
