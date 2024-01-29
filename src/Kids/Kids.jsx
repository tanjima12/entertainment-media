import "./Kids.css";
const Kids = () => {
  return (
    <div className="flex items-center gap-48 ">
      <div>
        <div className="relative">
          <img
            className="h-[350px] w-[650px] ml-20 mt-32 opacity-60"
            src="https://i.ibb.co/vxcjyKD/8609202-5852-2.jpg"
          ></img>
        </div>
        <div className="absolute top-[5070px] left-[150px] ">
          <h1 className="text-[#bb6c38] text-5xl mb-8 font-serif">
            Create profiles for kids
          </h1>
          <p className="text-2xl text-[#FFFFFF]  text-center">
            Send kids on adventures with their<br></br> favorite characters in a
            space made just<br></br> for them—free with your membership.
          </p>
        </div>
      </div>
      <div className="mt-32">
        <div className="input-group">
          <input
            type="email"
            className="input"
            id="Email"
            name="Email"
            placeholder="Enter Your Email"
          />
          <input className="button--submit" value="Subscribe" type="submit" />
        </div>
      </div>
    </div>
  );
};

export default Kids;
