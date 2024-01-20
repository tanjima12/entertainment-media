import "./TVSection.css";

const TVSection = () => {
  return (
    <div className="lg:flex justify-evenly ml-10 mt-10 lg:mt-28 mb-32">
      <div>
        <p className="text-white font-satisfy">
          <span className="text-5xl text-gray-400">E</span>
          <span className="font-Ysabeau text-[18px]">
            xperience entertainment on a grand scale by tuning in on your
            <br></br> Smart TVs, gaming consoles like Playstation and Xbox,
            casting with<br></br> Chromecast, immersing yourself with Apple TV,
            enjoying the cinematic<br></br> feel on Blu-ray players, and
            exploring numerous other devices that<br></br> bring your content to
            life.
          </span>
        </p>
      </div>
      {/* //slider section */}
      <div className="lg:ml-5 lg:mr-5">
        <div className=" relative w-[350px] mx-auto perspective-d mt-5">
          <div className=" rotator">
            <div className="items ">
              <img src="https://i.ibb.co/PDy9LFY/351.jpg" alt="items photo" />
            </div>
            <div className="items">
              <img src="https://i.ibb.co/58JRnNz/smiling-couple-eating-popcorn-watching-tv-while-relaxing-sofa.jpg" />
            </div>
            <div className="items">
              <img
                src="https://i.ibb.co/LPNNcGp/3942584.jpg"
                alt="items photo"
              />
            </div>
            <div className="items">
              <img
                src="https://i.ibb.co/t4TrghN/19198445.jpg"
                alt="items photo"
              />
            </div>
            <div className="items">
              <img src="https://i.ibb.co/CzwWFMY/37279.jpg" alt="items photo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TVSection;
