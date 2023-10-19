// import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Watch from "../Watch/Watch";
import Banner from "../Banner/Banner";
import { useLoaderData, useNavigate } from "react-router-dom";
import Brand from "../Brand/Brand";
import Footer from "../Footer/Footer";

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
      <div className="flex gap-60">
        <div>
          <h1 className="text-white text-5xl font-pixelify font-semibold mt-10 mb-8 ml-24 ">
            Our Some Selected Brand <br></br> Which we Provide you
          </h1>
          {brandInfo.map((brand) => (
            <Brand key={brand.id} brand={brand}></Brand>
          ))}
        </div>
        <div className="mt-80">
          <Watch></Watch>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
