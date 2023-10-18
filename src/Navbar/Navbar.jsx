import { NavLink } from "react-router-dom";

const Navbar = () => {
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
          <a className="btn">Log In</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
