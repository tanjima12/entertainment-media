import Lottie from "lottie-react";
import ani from "../.././src/assets/animation/Animation - 1706512901276 (1).json";
import download from "../../src/assets/animation/Animation - 1706515013102.json";

const Watch = () => {
  return (
    <div className="flex  justify-center gap-48 mt-20 mb-20">
      <div className="flex justify-center">
        <div>
          <div className="absolute w-[400px]">
            <Lottie animationData={ani} loop={true}></Lottie>
          </div>
          <div>
            <div className="relative top-[320px] left-[50px] bg-[#3c333c]  text-primary-content">
              <div className="flex justify-between items-center gap-3 w-[300px]">
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
      <div className="mt-28">
        <h1 className=" text-4xl mb-4 text-[#666699] font-poppins font-bold">
          Save your shows for offline<br></br> viewing
        </h1>
        <p className="text-white text-xl">
          Easily store your favorite shows for offline<br></br> viewing and
          never run out of entertainment <br></br> options.
        </p>
      </div>
    </div>
  );
};

export default Watch;
