const TVSection = () => {
  return (
    <div className="lg:flex justify-center gap-56 ml-10 lg:ml-20 mt-10 lg:mt-28 mb-32">
      <div>
        <h1 className="text-white text-5xl font-satisfy mt-10">
          Enjoy on your TV
        </h1>
        <p className="text-white text-xl">
          Watch on Smart TVs, Playstation, Xbox, Chromecast,<br></br> Apple TV,
          Blu-ray players, and more.
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
