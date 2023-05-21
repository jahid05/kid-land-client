import { Link } from "react-router-dom";

const AddToys = () => {
    const addProductHandle = (event) => {
        event.preventDefault();
    
        const form = event.target;
        const name = form.name.value;
        const description = form.description.value;
        const price = form.price.value;
        const off_price = form.off_price.value;
        const photoURL = form.photoURL.value;
    
        const product = { name, description, price, off_price, photoURL };
    
        console.log(product);
      };


  return (
    <div className="hero px-4 min-h-screen bg-base-200">
      <div className="hero-content w-full lg:w-1/3">
        <form onSubmit={addProductHandle} className="card w-full shadow-2xl bg-base-100">
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
                type="text"
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
                type="text"
                placeholder="Off Price"
                className="input rounded-full input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                required
                name="photoURL"
                type="text"
                placeholder="Photo URL"
                className="input rounded-full input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-theme-100 border-none rounded-full normal-case">Add a Toy</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToys;
