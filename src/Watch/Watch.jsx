import Lottie from "lottie-react";
import ani from "../.././src/assets/animation/Animation - 1706512901276 (1).json";
import download from "../../src/assets/animation/Animation - 1706515013102.json";

const Watch = () => {
  return (
    <div className="flex justify-center">
      <div>
        <div className="absolute w-[250px]">
          <Lottie animationData={ani} loop={true}></Lottie>
        </div>
        <div>
          <div className="relative top-[180px] bg-[#3c333c]  text-primary-content">
            <div className="flex justify-between items-center">
              <div>
                <img
                  className="h-12 w-10 ml-3"
                  src="https://i.ibb.co/fQ3X4V0/mason-kimbarovsky-X-d7m2r70b-A-unsplash-1.jpg"
                ></img>
              </div>

              <p>Downloading...</p>

              <div className="w-[60px]">
                <Lottie animationData={download} loop={true}></Lottie>
              </div>
            </div>
          </div>
          {/* <Lottie animationData={download} loop={true}></Lottie> */}
        </div>
        {/* <h1 className="text-white  text-4xl font-turrerRod font-medium">
          Watch EveryWhere
        </h1>
        <p className="text-white text-xl mt-2">
          Stream unlimited movies,cartoon,web series TV shows <br></br> on your
          phone, tablet, laptop, and TV.
        </p> */}
      </div>
    </div>
  );
};

export default Watch;
