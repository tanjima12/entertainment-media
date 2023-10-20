import { Link, NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { AuthContexts } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContexts);
  const [themes, setThemes] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const handleTheme = (e) => {
    if (e.target.checked) {
      setThemes("dark");
    } else {
      setThemes("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", themes);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [themes]);
  const handleSignout = () => {
    logOut()
      .then((result) => {
        console.log(result, "successfully log out");
      })
      .catch((error) => console.error(error));
  };
  const navlist = (
    <>
      <NavLink to="/" className="mr-5">
        Home
      </NavLink>
      <NavLink to="/addProduct" className="mr-5">
        Add Product
      </NavLink>
      <NavLink to="/myCart" className="mr-5">
        My Cart
      </NavLink>
    </>
  );
  return (
    <div className="ml-8 mr-8">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown text-white">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 text-white"
            >
              {navlist}
            </ul>
          </div>
          <div className="flex gap-3 items-center">
            <img
              className="h-32 rounded-xl pt-5"
              src="https://i.ibb.co/VSL6R68/3d-render-music-note-illustration-design.jpg"
            ></img>
            <a className=" text-white text-xl">
              <span className="text-xl"> M</span>
              <span className="text-6xl text-orange-700  font-satisfy font-bold">
                O
              </span>
              ment
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 text-white text-2xl font-poppins">
            {navlist}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="  ml-24 lg:ml-1 flex gap-3 items-center">
            {user ? (
              <>
                <img
                  className="h-12 w-12 rounded-full"
                  src={user.photoURL}
                ></img>
                <p className="text-white">{user.displayName}</p>
                <button
                  onClick={handleSignout}
                  className="btn btn-outline bg-red-200 px-10 border-none mr-3"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <FaUserAlt className="text-3xl text-white"></FaUserAlt>
                <Link to="/login">
                  <button className="btn btn-outline bg-red-200 px-10 border-none mr-3">
                    LogIn
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input onChange={handleTheme} type="checkbox" />

          {/* sun icon */}
          <svg
            className="swap-on fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-off fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
