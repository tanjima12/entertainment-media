import { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import { AuthContexts } from "../AuthProvider/AuthProvider";
import swal from "sweetalert";
import { Link, Navigate } from "react-router-dom";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContexts);

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const name = form.get("name");
    const photo = form.get("photo");

    console.log(email, password, name, photo);

    if (password.length < 6) {
      return swal("Sorry!", "...Your password character is less than 6!");
    } else if (/^[a-zA-Z0-9]*$/.test(password)) {
      return swal("Sorry!", "...You have not any special Character!");
    } else if (!/[A-Z]/.test(password)) {
      return swal("...You have not any Capital letter!");
    } else {
      swal("You clicked the button!", "success");
    }

    createUser(email, password)
      .then((result) => {
        updateUser(name, photo).then(() => {
          console.log(result.user);
          Navigate("/");
        });
        // console.log(result.user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="pb-56">
      <Navbar></Navbar>
      <form onSubmit={handleRegister}>
        <div className="relative flex w-96 flex-col mt-20 ml-[600px] rounded-xl bg-yellow-100 bg-clip-border text-gray-700 shadow-md">
          <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl   text-black ">
            <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-violet-300 antialiased">
              Register
            </h3>
          </div>
          <div className="flex flex-col gap-4 p-6">
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder="Name"
                type="text"
                name="name"
                required
              />
            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder="Photo"
                type="text"
                name="photo"
              />
            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder="Email"
                type="email"
                name="email"
                required
              />
            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 f focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder="password"
                type="password"
                name="password"
                required
              />
            </div>
          </div>
          <div className="p-6 pt-0">
            <button className="block w-full select-none rounded-lg bg-gradient-to-tr bg-orange-300 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg  active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
              Register
            </button>
            <p className="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
              Do have an account?
              <Link to="/login">
                <button className="ml-1 block font-sans text-sm font-bold leading-normal text-pink-500 antialiased">
                  Log In
                </button>
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
