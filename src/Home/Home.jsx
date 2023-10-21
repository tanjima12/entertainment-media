// import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Watch from "../Watch/Watch";
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import Brand from "../Brand/Brand";
import Footer from "../Footer/Footer";
import Kids from "../Kids/Kids";
import TVSection from "../TVSection/TVSection";

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
          <h1 className="text-[#b18db3] font-turrerRod font-semibold text-5xl mt-10 mb-8 text-center">
            Our Some Selected Brand <br></br> Which we Provide you
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 mr-10">
            {brandInfo.map((brand) => (
              <Brand key={brand.id} brand={brand}></Brand>
            ))}
          </div>
        </div>
        <hr></hr>
        <div>
          <TVSection></TVSection>
        </div>
        <hr></hr>
        <div>
          <Kids></Kids>
        </div>
        <div className="flex justify-end ml-20  lg:mr-32 mt-8 lg:mt-5">
          <Watch></Watch>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
