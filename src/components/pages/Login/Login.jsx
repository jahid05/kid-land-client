import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { useContext } from "react";
import AuthProvider from "../../Context/AuthProvider";

const Login = () => {
    const signIn = useContext(AuthProvider);


  const signInHandle = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };

    signIn(email, password)
    .then(res => {
        console.log(res);
    })
    .catch(error => {
        console.log(error);
    })

    console.log(user);
  };
  return (
    <div className="container mx-auto">
      <div className="lg:w-1/2 px-4 mx-auto shadow-xl">
        <div className="grid md:grid-cols-2 grid-cols-1 lg:my-40 my-20 rounded-2xl">
          <div className="card">
            <h1 className="font-bold text-center text-theme-100 py-5 md:text-4xl text-2xl">
              Sign in
            </h1>
            <div className="flex justify-center">
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
            <p className="text-center text-lg">or use your account</p>
            <form onSubmit={signInHandle} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="text"
                  placeholder="email"
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
                  placeholder="password"
                  className="input rounded-full input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-theme-100 normal-case border-none btn-block rounded-full">
                  Sign in
                </button>
              </div>
            </form>
          </div>
          <div className="text-center text-white justify-center flex flex-col md:rounded-e-2xl bg-theme-100 p-5 h-full space-y-2">
            <h1 className="text-4xl font-bold">Hello, Friend!</h1>
            <p className="py-6">
              Enter your personal details and start journey with us
            </p>
            <Link to="/signUp">
              <button className="btn btn-outline rounded-full px-9 normal-case border-white border-2 text-white">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
