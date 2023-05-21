import { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../context/Auth/AuthProvider";
import { useNavigate } from "react-router-dom";



const AddToys = () => {
    const {user} = useContext(AuthContext);
    console.log(user.uid);

    const navigate = useNavigate()


    const addProductHandle = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const description = form.description.value;
    const price = form.price.value;
    const off_price = form.off_price.value;
    const picture = form.picture.value;
    const rating = 4.6;
    const uid = user?.uid

    const addToy = { name, description, price, off_price, rating, picture ,uid};
    console.log(addToy);

    fetch("https://kids-land.vercel.app/add-collection", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Add Successfully!");
        navigate('/myToys')
      })
      
  };

  return (
    <div className="hero px-4 min-h-screen bg-base-200">
      <div className="hero-content w-full lg:w-1/3">
        <form
          onSubmit={addProductHandle}
          className="card w-full shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                required
                name="name"
                type="text"
                placeholder="Name"
                className="input rounded-full input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                name="description"
                type="text"
                placeholder="Description"
                className="input rounded-full input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                required
                name="price"
                type="number"
                placeholder="Price"
                className="input rounded-full input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Off Price</span>
              </label>
              <input
                required
                name="off_price"
                type="number"
                placeholder="Off Price"
                className="input rounded-full input-bordered"
              />
            </div>
            {/* <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                required
                name="rating"
                type="number"
                placeholder="Rating"
                className="input rounded-full input-bordered"
              />
            </div> */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                required
                name="picture"
                type="text"
                placeholder="Photo URL"
                className="input rounded-full input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-theme-100 border-none rounded-full normal-case">
                Add a Toy
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToys;
