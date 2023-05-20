import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../../Firebase/firebase.config";

const SignUp = () => {
  const auth = getAuth(app);

  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });

    console.log("Sign In With Google");
  };

  const signUpHandle = (event) => {
    event.preventDefault();

    const form = event.target;
    const displayName = form.displayName.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;
    const user = {displayName, email, password, photoURL};
    console.log(user);
  };
  return (
    <div className="container mx-auto">
      <div className="lg:w-1/2 px-4 mx-auto shadow-xl">
        <div className="grid md:grid-cols-2 grid-cols-1 lg:my-40 my-20 rounded-2xl">
          <div className="text-center text-white justify-center flex flex-col md:rounded-s-2xl bg-theme-100 p-5 h-full space-y-2">
            <h1 className="text-4xl font-bold">Welcome Back!</h1>
            <p className="py-6">
            To keep connected with us please login with your personal info
            </p>
            <Link to='/login'>
              <button className="btn btn-outline rounded-full px-9 normal-case border-white border-2 text-white">
                Sign in
              </button>
            </Link>
          </div>
          <div className="card">
            <h1 className="font-bold text-center text-theme-100 py-5 md:text-4xl text-2xl">
              Create Account
            </h1>
            <div className="flex justify-center">
              <Link>
                <button
                  onClick={signInWithGoogle}
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
            </p>
            <form onSubmit={signUpHandle} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
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
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="input rounded-full input-bordered"
                />
              </div>
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
