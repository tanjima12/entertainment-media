import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Branddetails = () => {
  const [details, setDetails] = useState([]);
  const { BrandName } = useParams();
  useEffect(() => {
    fetch(` http://localhost:5000/product/${BrandName}`, {})
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
      });
  }, [BrandName]);
  return (
    <div className="h-[900px] mr-10 ml-10">
      <Navbar></Navbar>
      <h1 className="text-5xl font-orbitron text-white text-center pt-5">
        Our Most Famous Available Services
      </h1>
      <div className="grid grid-cols-4 mt-10">
        {details.map((detail) => (
          <div key={detail.id}>
            <div className="card w-96  bg-base-100 shadow-xl image-full mb-3">
              <figure>
                <img src={detail.PhotoUrl}></img>
              </figure>
              <div className="card-body ">
                <h2 className=" text-white text-3xl text-orange-600 text-center">
                  {detail.BrandName}
                </h2>
                <p className="text-xl ml-5">
                  {detail.name}
                  <span className="">({detail.type})</span>
                </p>

                <div className="flex justify-around ml-5">
                  <p>Price:{detail.price}</p>
                  <p>Rate:{detail.rating}</p>
                </div>
                <div className="card-actions ml-5">
                  <Link to="/viewDetails">
                    <button className="btn hover:bg-orange-600">
                      View Details
                    </button>
                  </Link>
                  <Link to={`/updateProduct/$(_id)`}>
                    <button className="btn hover:bg-orange-600">Update</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Branddetails;
