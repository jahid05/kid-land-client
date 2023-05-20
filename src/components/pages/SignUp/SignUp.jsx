import { Link, useNavigate } from "react-router-dom";
import {} from "firebase/auth";
import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../context/Auth/AuthProvider";
import CommnonLoader from "../Shared/CommonLoader/CommnonLoader";

const SignUp = () => {
  const [loader, setLoder] = useState(false);
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState('')
  const signUpHandle = (event) => {
    event.preventDefault();

    const form = event.target;
    const displayName = form.displayName.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;
    const user = { displayName, email, password, photoURL };
    console.log(user);
    

    createUser(email, password)
      .then((res) => {
        updateProfile(displayName, photoURL);
        toast.success("Sign up Successfully!");
        navigate("/");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  };
  const updateProfile = (name, photo) => {
    const profile = { displayName: name, photoURL: photo };
    updateUserProfile(profile)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="container mx-auto">
      {loader && <CommnonLoader></CommnonLoader>}
      <div className="lg:w-1/2 px-4 mx-auto shadow-xl">
        <div className="grid md:grid-cols-2 grid-cols-1 lg:my-40 my-20 rounded-2xl">
          <div className="text-center text-white justify-center flex flex-col md:rounded-s-2xl bg-theme-100 p-5 h-full space-y-2">
            <h1 className="text-4xl font-bold">Welcome Back!</h1>
            <p className="py-6">
              To keep connected with us please login with your personal info
            </p>
            <Link to="/login">
              <button className="btn btn-outline rounded-full px-9 normal-case border-white border-2 text-white">
                Sign in
              </button>
            </Link>
          </div>
          <div className="card">
            <h1 className="font-bold text-center text-theme-100 py-5 md:text-4xl text-2xl">
              Create Account
            </h1>
            {/* <div className="flex justify-center">
              <Link>
                <button
                  className="text-2xl rounded-full mx-4"
                >
                  <FaGoogle></FaGoogle>
                </button>
              </Link>
              <Link>
                <button className="text-2xl rounded-full mx-4">
                  <FaFacebook></FaFacebook>
                </button>
              </Link>
              <Link>
                <button className="text-2xl rounded-full mx-4">
                  <FaLinkedinIn></FaLinkedinIn>
                </button>
              </Link>
            </div>
            <p className="text-center text-lg">
              or use your email for registration
            </p> */}
            <form onSubmit={signUpHandle} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  required
                  name="displayName"
                  type="text"
                  placeholder="Full Name"
                  className="input rounded-full input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  required
                  name="email"
                  type="text"
                  placeholder="Email"
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
                  type="url"
                  placeholder="Photo URL"
                  className="input rounded-full input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  required
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="input rounded-full input-bordered"
                />
              </div>
              {error && <p className="text-error font-semibold">{error}</p>}
              <div className="form-control mt-6">
                <button className="btn bg-theme-100 normal-case border-none btn-block rounded-full">
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
