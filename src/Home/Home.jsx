import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Watch from "../Watch/Watch";
import Banner from "../Banner/Banner";

const Home = () => {
  const brandInfo = useLoaderData();
  return (
    <div className="">
      <div className="">
        <Navbar></Navbar>
      </div>
      <div>
        <Banner></Banner>
      </div>
      <div className="flex gap-60">
        <div>
          <h1 className="text-white text-5xl font-pixelify font-semibold mt-10 mb-8 ml-24 ">
            Our Some Selected Brand <br></br> Which we Provide you
          </h1>
          {brandInfo.map((brand) => (
            <div key={brand.id}>
              <div className="relative flex ml-24 mb-8 max-w-[34rem] flex-col rounded-xl  bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                  <img src={brand.image} alt="ui/ux review check" />
                </div>
                <div className="p-6">
                  <h4 className="block text-3xl text-center antialiased font-semibold leading-snug tracking-normal text-[#c6d8e7] font-pixelify">
                    {brand.brandname}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-80">
          <Watch></Watch>
        </div>
      </div>
    </div>
  );
};

export default Home;
