/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const Brand = ({ brand }) => {
  const { BrandName, image } = brand;
  const navigate = useNavigate();
  const handleBrandDetails = () => {
    navigate(`/brandDetails/${BrandName}`);
  };
  return (
    <div
      onClick={handleBrandDetails}
      className="flex flex-col items-center justify-center w-full max-w-sm mx-auto mb-8"
    >
      <div
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
      </div>
    </div>
    // {/* <div
    //   onClick={handleBrandDetails}
    //   className="relative flex ml-10 mb-8 max-w-[26rem] h-[28rem] flex-col rounded-full  bg-purple-700 bg-gradient-to-r from-purple-800 via-red-600 to-yellow-200 bg-clip-border text-gray-700 shadow-md"
    // >
    //   <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-3xl shadow-none bg-clip-border">
    //     <img src={image} alt="ui/ux review check" />
    //   </div>
    //   <div className="p-6">
    //     <h4 className="block text-3xl text-center antialiased font-semibold leading-snug tracking-normal text-[#c6d8e7] font-pixelify">
    //       {BrandName}
    //     </h4>
    //   </div>
    // </div> */}
  );
};

export default Brand;
