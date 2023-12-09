const Banner = () => {
  return (
    <div className="bannerbg h-[550px] rounded-lg mr-3 ml-3 lg:mr-10 lg:ml-10">
      <h1 className="text-white font-orbitron text-5xl mt-10 pt-10 lg:pt-40 text-center">
        Unlimited movies, TV shows, and more
      </h1>
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
