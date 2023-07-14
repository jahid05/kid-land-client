import { useContext } from "react";
import { AuthContext } from "../../../context/Auth/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddToys = () => {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const addProductHandle = (event) => {
    event.preventDefault();

    const form = event.target;
    const sellerName = form.sellerName.value; 
    const sellerEmail = form.sellerEmail.value; 
    const product = form.product.value;
    const description = form.description.value;
    const priceStr = form.price.value;
    const price = parseFloat(priceStr);
    const off_price = form.off_price.value;
    const picture = form.picture.value;
    const rating = form.rating.value;
    const category = form.category.value;
    const quantity = form.quantity.value;
    
    
    const uid = user?.uid;


    const addToy = {
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
      uid,
    };
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
        Swal.fire(
          'Added Successfully!',
          'You clicked the button!',
          'success'
        )
        navigate("/myToys");
      })
      
  };

  return (
    <div className="hero px-4 min-h-screen bg-base-200">
      <div className="hero-content w-full lg:w-1/3">
        <form
          onSubmit={addProductHandle}
          className="card w-full shadow-2xl bg-base-100"
        >
          <div className="card-body  border-2 border-slate-300 rounded-2xl">
            <h1 className="font-bold text-center text-theme-100 py-3 md:text-4xl text-2xl">
              Add a Toy
            </h1>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="form-control">
                <input
                  required
                  name="sellerName"
                  defaultValue={user?.displayName}
                  type="text"
                  placeholder="Seller Name"
                  className="input rounded-full input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  required
                  name="sellerEmail"
                  defaultValue={user?.email}
                  type="text"
                  placeholder="Seller Email"
                  className="input rounded-full input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  required
                  name="product"
                  type="text"
                  placeholder="Product Name"
                  className="input rounded-full input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  required
                  name="picture"
                  type="url"
                  placeholder="Photo URL"
                  className="input rounded-full input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  required
                  name="price"
                  type="number"
                  placeholder="Price"
                  className="input rounded-full input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  required
                  name="quantity"
                  type="number"
                  placeholder="Quantity"
                  className="input rounded-full input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  required
                  name="off_price"
                  type="number"
                  placeholder="Off Price"
                  className="input rounded-full input-bordered"
                />
              </div>
              <select required name="rating" className="select select-bordered rounded-full w-full"> 
                <option disabled selected>
                  Rating
                </option>
                <option>1</option>
                <option>1.5</option>
                <option>2</option>
                <option>2.5</option>
                <option>3</option>
                <option>3.5</option>
                <option>4</option>
                <option>4.5</option>
                <option>5</option>
              </select>
              <select required name="category" className="select select-bordered rounded-full w-full">         
                <option disabled selected>
                  Category
                </option>
                <option >Car</option>
                <option >Jeep</option>
                <option >Monster</option>
              </select>
              
            </div>
            <textarea required name="description" className="textarea textarea-bordered" placeholder="Description"></textarea>
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
