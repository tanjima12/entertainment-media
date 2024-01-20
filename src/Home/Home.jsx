// import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Watch from "../Watch/Watch";
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import Brand from "../Brand/Brand";
import Footer from "../Footer/Footer";
import Kids from "../Kids/Kids";
import TVSection from "../TVSection/TVSection";
import { TypeAnimation } from "react-type-animation";
import MostFamousMovie from "../MostFamousMov/MostFamousMovie";
import Question from "../Question/Question";

// http://localhost:5000/product

const Home = () => {
  const brandInfo = useLoaderData();

  return (
    <div className="">
      <div className="bannerbg">
        <Navbar></Navbar>

        <Banner></Banner>
      </div>
      <div className="">
        <div>
          <h1 className="text-[#A0CFEC] font-thin  text-2xl mt-10 mb-14 text-center ">
            <TypeAnimation
              sequence={[
                "We",
                500,
                "We offer", //  Continuing previous Text
                500,
                "We offer a ",
                500,
                "We offer a select",
                500,
                "We offer a select range",
                500,
                "We offer a select range of",
                500,
                "We offer a select range of brands",
                500,

                "We offer a select range of brands for",
                500,
                "We offer a select range of brands for you",
              ]}
              style={{ fontSize: "2em" }}
              repeat={Infinity}
            />
          </h1>
          <div className="grid grid-cols-1  mr-10 mb-5">
            {brandInfo.map((brand) => (
              <Brand key={brand.id} brand={brand}></Brand>
            ))}
          </div>
        </div>
        <hr></hr>
        <div className="mb-20">
          <MostFamousMovie></MostFamousMovie>
        </div>

        <div>
          <TVSection></TVSection>
        </div>
        <hr></hr>
        <div>
          <Question></Question>
        </div>
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
