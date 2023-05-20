import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="container mx-auto font-custom-100">
      <div className="py-20 text-center">
        <h1 className="lg:text-[350px] text-9xl font-custom-200 ">404</h1>
        <h3 className="text-2xl font-custom-200 py-12">404 - Page Not Found</h3>
        <Link to="/">
          <button className="btn px-9 border-none rounded-full normal-case bg-theme-100">Go To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
