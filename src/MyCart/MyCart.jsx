import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import Swal from "sweetalert2";
import { useState } from "react";

const MyCart = () => {
  const myCartCollection = useLoaderData();
  const [media, setMedia] = useState(myCartCollection);
  const { _id } = myCartCollection;
  console.log(_id);

  console.log(myCartCollection);
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/CartCollect/${_id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setMedia(media.filter((type) => type._id !== _id));
          });

        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <div className="pb-10">
      <Navbar></Navbar>
      <div>
        <h1 className="text-4xl text-white text-center">My Cart</h1>
        <div className=" ml-10 mt-10 grid grid-cols-3 ">
          {media.map((cart) => (
            <div key={cart._id}>
              <div className="card card-compact w-96 bg-base-100 shadow-xl mt-5">
                <figure>
                  <img src={cart.PhotoUrl}></img>
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{cart.name}</h2>
                  <p>{cart.shortDescription}</p>
                  <p className="text-red-600">Rating:{cart.rating}</p>
                  <div className="card-actions justify-end">
                    <button
                      onClick={() => handleDelete(cart._id)}
                      className="btn bg-red-800 hover:bg-white"
                    >
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
