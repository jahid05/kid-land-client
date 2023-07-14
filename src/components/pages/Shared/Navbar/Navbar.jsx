import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../../context/Auth/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handdelLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  console.log(user);

  const navItems = (
    <>
      <NavLink
        className="px-2 font-custom-100 hover:text-theme-100 ease-in duration-300 text-lg font-semibold"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="px-2 font-custom-100 hover:text-theme-100 ease-in duration-300 text-lg font-semibold"
        to="allToys"
      >
        All Toys
      </NavLink>
      {user && (
        <>
          <NavLink
            className="px-2 font-custom-100 hover:text-theme-100 ease-in duration-300 text-lg font-semibold"
            to="myToys"
          >
            My Toys
          </NavLink>
          <NavLink
            className="px-2 font-custom-100 hover:text-theme-100 ease-in duration-300 text-lg font-semibold"
            to="addToys"
          >
            Add a Toy
          </NavLink>
        </>
      )}
      <NavLink
        className="px-2 font-custom-100 hover:text-theme-100 ease-in duration-300 text-lg font-semibold"
        to="blog"
      >
        Blog
      </NavLink>
      <NavLink
        className="px-2 font-custom-100 hover:text-theme-100 ease-in duration-300 text-lg font-semibold"
        to="contact"
      >
        Contact
      </NavLink>
    </>
  );
  return (
    <div className="container mx-auto navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <a className="font-custom-200 font-bold text-theme-100 normal-case  text-2xl">
          Kids Land
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      {user?.uid ? (
        <div className="navbar-end">
          <div className="tooltip tooltip-bottom " data-tip={user?.displayName}>
            <div className="flex items-center gap-2">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-12 rounded-full flex items-center">
                  {user?.photoURL ? (
                    <img src={user?.photoURL} />
                  ) : (
                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png"/>
                  )}
                </div>
              </label>
            </div>
          </div>
          <button
                className="btn py-1  rounded-full px-4 ms-2 normal-case font-custom-100 bg-theme-100 border-none"
                onClick={handdelLogout}
              >
                Sign out
              </button>
        </div>
      ) : (
        <div className="navbar-end">
          <Link to="/login">
            <button className="btn rounded-full px-9 normal-case font-custom-100 bg-theme-100 border-none">
              Sign in
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;


<div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>