import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const UpdateProduct = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="ml-72">
        <div className="homebg h-[700px]">
          <h1 className="text-4xl  pt-10 ml-72  font-turrerRod mb-5 text-rose-300">
            Update Your Product
          </h1>
          <form>
            <div className="flex mb-5 ml-5 gap-16">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white text-2xl">
                    Brand Name
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="brandname"
                    placeholder="Brand Name"
                    className="input input-bordered  w-96"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white text-2xl">Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered  w-96"
                  />
                </label>
              </div>
            </div>
            <div className="flex mb-5 ml-5 gap-16">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white text-2xl">Type</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="type"
                    placeholder="Type"
                    className="input input-bordered  w-96"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white text-2xl">Price</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="price"
                    placeholder="price"
                    className="input input-bordered  w-96"
                  />
                </label>
              </div>
            </div>

            <div className="flex mb-5 ml-5 gap-16">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white text-2xl ">
                    Rating
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="number"
                    name="rating"
                    placeholder="Rating"
                    className="input input-bordered bg-slate-200  w-96"
                  />
                </label>
              </div>
            </div>

            <div className="form-control ">
              <label className="input-group ml-72 mb-5">
                <input
                  type="Submit"
                  value="Submit"
                  className="input input-bordered  w-96 bg-yellow-600"
                />
              </label>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default UpdateProduct;
