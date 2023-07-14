import { Link, useNavigate } from "react-router-dom";
import {} from "firebase/auth";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/Auth/AuthProvider";
import CommnonLoader from "../Shared/CommonLoader/CommnonLoader";
import Swal from "sweetalert2";

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
        Swal.fire(
          'Sign up Successfully!',
          'You clicked the button!',
          'success'
        )
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
    <div className="container mx-auto h-screen">
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
            <h1 className="font-bold text-center text-theme-100 py-2 md:text-4xl text-2xl">
              Create Account
            </h1>
            <form onSubmit={signUpHandle} className="card-body">
              <div className="form-control">
                <input
                  required
                  name="displayName"
                  type="text"
                  placeholder="Full Name"
                  className="input rounded-full input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  required
                  name="email"
                  type="text"
                  placeholder="Email"
                  className="input rounded-full input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  required
                  name="photoURL"
                  type="url"
                  placeholder="Photo URL"
                  className="input rounded-full input-bordered"
                />
              </div>
              <div className="form-control">
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
