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
      <NavLink to="/" className="mr-16 text-[#eefbfb] ">
        Home
      </NavLink>
      <NavLink to="/addProduct" className="mr-16 text-[#eefbfb]">
        Add Product
      </NavLink>
      <NavLink to="/myCart" className="mr-16 text-[#eefbfb]">
        My Cart
      </NavLink>
    </>
  );
  return (
    <div className=" bg-[#83C0C1]">
      <div className=" lg:navbar ">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-2xl  rounded-box w-52 text-white"
            >
              {navlist}
              <label className="swap swap-rotat">
                {/* this hidden checkbox controls the state */}
                <input onChange={handleTheme} type="checkbox" />

                {/* sun icon */}
                <svg
                  className="swap-on fill-current w-8 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                {/* moon icon */}
                <svg
                  className="swap-off fill-current text-white w-10 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </ul>
          </div>
          <div className="flex gap-3 items-center ml-16">
            <img
              className="h-16 w-12 rounded-full pt-5 "
              src="https://i.ibb.co/rZZT72D/4785284-2516144.jpg"
            ></img>
            <a className=" text-white text-xl flex items-center mt-4 ">
              <span className="text-xl bg-gradient-to-r from-[#354857] to-[#6393C1] text-transparent bg-clip-text font-bold">
                M
              </span>
              <span className="text-5xl bg-gradient-to-r from-[#de09c2] to-[#00FFE1] text-transparent bg-clip-text mr-2  font-serif font-bold">
                O
              </span>
              <span className="text-[#F4F2DE]">ment</span>
            </a>
          </div>
        </div>
        <div className="navbar-center  hidden lg:flex ">
          <ul className="menu menu-horizontal   text-2xl font-poppins ">
            {navlist}
            <label className="swap swap-rotat">
              {/* this hidden checkbox controls the state */}
              <input onChange={handleTheme} type="checkbox" />

              {/* sun icon */}
              <svg
                className="swap-on fill-current w-8 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off fill-current text-[#4a9b9b] w-10 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </ul>
        </div>

        <div className="navbar-end">
          <div className="  mt-2  lg:ml-1 flex gap-3 items-center ">
            {user ? (
              <>
                <p className="text-white">{user.displayName}</p>
                <img
                  className="h-12 w-12 rounded-full"
                  src={user.photoURL}
                ></img>

                <button
                  onClick={handleSignout}
                  className=" btn btn-outline bg-gradient-to-r from-[#00d2ff] to-[#928dab] px-5 border-none mr-16"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <FaUserAlt className="text-3xl text-blue-300"></FaUserAlt>
                <Link to="/login">
                  <button className="btn btn-outline bg-gradient-to-r from-[#00d2ff] to-[#928dab] px-5 border-none mr-16">
                    LogIn
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
