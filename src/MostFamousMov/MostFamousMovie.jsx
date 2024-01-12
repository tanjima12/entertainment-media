import "./MostFamousMovie.css";

const MostFamousMovie = () => {
  return (
    <div>
      <div className="mt-10" data-aos="fade-left">
        <h1 className=" text-emerald-100 text-3xl text-center font-julius font-semibold">
          Our Lastest Hit Movies
        </h1>
      </div>
      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <img src="https://i.ibb.co/my3t8cH/hq720.jpg"></img>
          </div>
          <div className="slide">
            <img src="https://i.ibb.co/nbTsQr2/jawan-1019x573.jpgg"></img>
          </div>
          <div className="slide">
            <img src="https://i.ibb.co/wK10VLL/439558167.jpg"></img>
          </div>
          <div className="slide">
            <img src="https://i.ibb.co/KKd98MN/1350510-vd.webp"></img>
          </div>
          <div className="slide">
            <img src="https://i.ibb.co/yY8pRrM/https-cdn-evbuc-com-images-639086699-112895314787-1-original.jpg"></img>
          </div>
          <div className="slide">
            <img src="https://i.ibb.co/fGFvL1Y/images.jpg"></img>
          </div>
          <div className="slide">
            <img src="https://i.ibb.co/y6YBrbr/download-2.jpg"></img>
          </div>
          <div className="slide ">
            <img src="https://i.ibb.co/c1zzVVt/images-1.jpg"></img>
          </div>
          <div className="slide ">
            <img src="https://i.ibb.co/C2dzghh/images-2.jpg"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostFamousMovie;
