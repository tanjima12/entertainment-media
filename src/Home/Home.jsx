// import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Watch from "../Watch/Watch";
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import Brand from "../Brand/Brand";
import Footer from "../Footer/Footer";
import Kids from "../Kids/Kids";

// http://localhost:5000/product

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
      <div className="">
        <div>
          <h1 className="text-white text-5xl font-pixelify font-semibold mt-10 mb-8 text-center ">
            Our Some Selected Brand <br></br> Which we Provide you
          </h1>
          <div className="grid grid-cols-3 mr-10">
            {brandInfo.map((brand) => (
              <Brand key={brand.id} brand={brand}></Brand>
            ))}
          </div>
        </div>
        <div>
          <Kids></Kids>
        </div>
        <div className="flex justify-end mr-32 mt-5">
          <Watch></Watch>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
