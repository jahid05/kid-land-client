import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/Auth/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const { signIn, googleLoginPopup } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const googleProvider = new GoogleAuthProvider();

  
  const handleLogin = (event) => {
    event.preventDefault();

    signIn(email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handelGoogleLogin = () => {
    googleLoginPopup(googleProvider)
      .then(() => {
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container mx-auto">
      <div className="lg:w-1/2 px-4 mx-auto shadow-xl">
        <div className="grid md:grid-cols-2 grid-cols-1 lg:my-40 my-20">
          <div className="text-center text-white lg:text-left justify-center flex flex-col bg-theme-100 p-6 h-full space-y-2">
            <h1 className="text-5xl font-bold">Hello, Friend!</h1>
            <p className="py-6">
              Enter your personal details and start journey with us
            </p>
            <Link to='/signUp'>
              <button className="btn btn-outline rounded-full px-9 normal-case border-white border-2 text-white">
                Sign Up
              </button>
            </Link>
          </div>
          <div className="card">
            <h1 className="font-bold text-center text-theme-100 py-5 md:text-4xl text-2xl">
              Sign in
            </h1>
            <div className="flex justify-center">
              <Link>
                <button
                  onClick={handelGoogleLogin}
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
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input rounded-full input-bordered"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input rounded-full input-bordered"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <Link>
                  <button
                    onClick={handleLogin}
                    className="btn bg-theme-100 border-none btn-block rounded-full"
                    type="submit"
                  >
                    Login
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
