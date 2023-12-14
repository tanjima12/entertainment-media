const Banner = () => {
  anime
    .timeline({ loop: true })
    .add({
      targets: ".ml15 .word",
      scale: [14, 1],
      opacity: [0, 1],
      easing: "easeOutCirc",
      duration: 800,
      delay: (el, i) => 800 * i,
    })
    .add({
      targets: ".ml15",
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
    });
  return (
    <div className="bannerbg h-[550px] rounded-lg mr-3 ml-3 lg:mr-10 lg:ml-10 ">
      <h1 className="ml15  text-white  mt-5  lg:pt-10 text-center ">
        <span className="word bg-gradient-to-r from-[#B7F8DB] to-[#50A7C2] text-transparent bg-clip-text">
          Unlimited{" "}
        </span>
        <span className="word bg-gradient-to-r from-[#48c6ef] to-[#6f86d6] text-transparent bg-clip-text">
          Movies,{" "}
        </span>
        <span className="word bg-gradient-to-r from-[#13547a] to-[#80d0c7] text-transparent bg-clip-text">
          TV shows{" "}
        </span>

        <span className="word bg-gradient-to-r from-[#667eea] to-[#764ba2] text-transparent bg-clip-text">
          and more
        </span>
      </h1>
      {/* <h1 className="">
        , , 
      </h1> */}
      <p className="text-white font-poppins mt-2 text-xl mb-10 text-center">
        Watch anywhere. Cancel anytime.
      </p>
      <p className="text-[#E41B17] font-semibold font-poppins mt-5 text-xl mb-2 text-center">
        Ready to watch? Enter your email to create or restart your membership.
      </p>

      <div className="form-control lg:ml-[520px]">
        <div className="input-group">
          <input
            type="text"
            placeholder="email"
            className="input input-bordered w-[500px]"
          />
          <button className="btn hover:bg-rose-300 btn-squareb bg-red-800 text-white">
            Lets Go
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
