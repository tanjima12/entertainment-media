import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const MyCart = () => {
  const myCartCollection = useLoaderData();
  console.log(myCartCollection);
  //   const [user, setUser] = useState();

  return (
    <div className="pb-10">
      <Navbar></Navbar>
      <div>
        <h1 className="text-4xl text-white text-center">My Cart</h1>
        <div className=" ml-10 mt-10 grid grid-cols-3 ">
          {myCartCollection.map((cart) => (
            <div key={cart._id}>
              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <img src={cart.PhotoUrl}></img>
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{cart.name}</h2>
                  <p>{cart.shortDescription}</p>
                  <p className="text-red-600">Rating:{cart.rating}</p>
                  <div className="card-actions justify-end">
                    <button className="btn bg-red-800 hover:bg-white">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MyCart;
