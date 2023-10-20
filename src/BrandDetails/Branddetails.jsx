import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Branddetails = () => {
  const [details, setDetails] = useState([]);

  console.log("it a d", details);
  const { BrandName } = useParams();
  // console.log(BrandName);
  useEffect(() => {
    fetch(` http://localhost:5000/product/${BrandName}`, {})
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
      });
  }, [BrandName]);
  return (
    <div className=" mr-10 ml-10">
      <Navbar></Navbar>
      <h1 className="text-5xl font-orbitron text-white text-center pt-5">
        Our Most Famous Available Services
      </h1>
      {!details.length > 0 ? (
        <p className="text-3xl text-red-500 text-center mt-10">no data found</p>
      ) : (
        <div className="grid grid-cols-4 mt-10">
          {details.map((detail) => (
            <div key={detail._id}>
              {/* <div className="text-white">{detail._id}</div> */}
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
                    <Link to={`/viewDetails/${detail._id}`}>
                      <button className="btn hover:bg-orange-600">
                        View Details
                      </button>
                    </Link>
                    <Link to={`/updateProduct/${detail._id}`}>
                      <button className="btn hover:bg-orange-600">
                        Update
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <section>
        <h1 className="text-4xl text-white font-orbitron mb-5 mt-8 text-center">
          Enjoy Your Day
        </h1>
        <div className="carousel ml-72 mb-10 w-[1000px] h-96">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/wzDjqv2/film-1668918-1280.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/SKK30cw/movie-theater-4609877-1280.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/2hq8Sdx/Screenshot-96.png"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/8BwJzzv/headphones-4223911-1280.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Branddetails;
