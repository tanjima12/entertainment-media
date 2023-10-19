/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";

const Brand = ({ brand }) => {
  const { BrandName, image } = brand;
  const navigate = useNavigate();
  const handleBrandDetails = () => {
    navigate(`/brandDetails/${BrandName}`);
  };
  return (
    <div>
      <div
        onClick={handleBrandDetails}
        className="relative flex ml-10 mb-8 max-w-[34rem] h-[28rem] flex-col rounded-xl bg-teal-800  bg-clip-border text-gray-700 shadow-md"
      >
        <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
          <img src={image} alt="ui/ux review check" />
        </div>
        <div className="p-6">
          <h4 className="block text-3xl text-center antialiased font-semibold leading-snug tracking-normal text-[#c6d8e7] font-pixelify">
            {BrandName}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Brand;
