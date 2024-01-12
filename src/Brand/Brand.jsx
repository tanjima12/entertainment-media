/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import "./Brand.css";

const Brand = ({ brand }) => {
  const { BrandName, image } = brand;
  const navigate = useNavigate();
  const handleBrandDetails = () => {
    navigate(`/brandDetails/${BrandName}`);
  };
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto mb-8">
      <div
        className="card"
        style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
      >
        <span></span>

        <div className="content flex flex-col">
          <h1 className="text-amber-100">{BrandName}</h1>

          <p onClick={handleBrandDetails} className="text-[#DB9370]">
            Click For Details
          </p>
        </div>
      </div>
      {/* <div
        className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <div className="w-56 h-16 -mt-10 overflow-hidden bg-[#f2e3f7] rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
        <h3 className="py-1 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
          {BrandName}
        </h3>

        <div className="flex items-center justify-between px-3 py-1 bg-gradient-to-r from-[#D4145A] to-[#FBB03B] dark:bg-gray-700">
          <span className="font-bold text-gray-800 dark:text-gray-200 ">
            $129
          </span>
          <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none ">
            Add to cart
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Brand;
