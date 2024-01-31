import { useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Banner = () => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleEmailClick = () => {
    if (email.trim() !== "") {
      console.log("lets go clicked");
    } else {
      console.log("email is required");
    }
  };
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
      <div className="mt-12">
        <p className="text-emerald-300 font-semibold font-poppins mt-5 text-xl mb-2 text-center">
          Ready to watch?<br></br> Enter your email to create or restart your
          membership.
        </p>
        <div className="form-control lg:ml-[420px]">
          <div className="input-group mt-3 ml-10">
            <input
              type="email"
              placeholder="Enter Your email"
              className="input bg-transparent input-bordered border-blue-200 text-white w-[500px]"
              onChange={handleEmailChange}
              required
            />
            {email.trim() !== "" ? (
              <Link to="/member">
                <button
                  onClick={handleEmailClick}
                  className="btn rounded-tl-none rounded-bl-none cursor-pointer hover:bg-rose-300 bg-gradient-to-t from-[#00d2ff] to-[#928dab] text-black  font-bold"
                >
                  Lets Go
                </button>
              </Link>
            ) : (
              <button
                disabled
                className="btn hover:bg-rose-300 bg-gradient-to-t from-[#7fc2d1] to-[#928dab]   font-bold"
              >
                Lets Go
              </button>
            )}
          </div>
        </div>
      </div>
      <Marquee>
        <p className="text-white mt-12 text-2xl font-extralight font-bold mb-10 text-center ">
          Unleash the Magic of Entertainment! Dive into a world of captivating
          content on our media hub. Explore the latest in movies,music, gaming,
          and more.Your ultimate destination for endless entertainment awaits –
          where excitement knows no bounds!
        </p>
      </Marquee>
    </div>
  );
};

export default Banner;
