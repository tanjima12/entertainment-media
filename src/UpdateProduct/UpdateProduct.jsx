import { useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import swal from "sweetalert";

const UpdateProduct = () => {
  const Info = useLoaderData();
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const brandName = form.brandname.value;
    const name = form.name.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const updateInfo = { brandName, name, type, price, rating };

    console.log(updateInfo);
    fetch(`http://localhost:5000/updated/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          swal("updated SuccessFully");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const { brandName, name, type, price, rating, _id } = Info;
  return (
    <div>
      <Navbar></Navbar>
      <div className="ml-72">
        <div className="homebg h-[700px]">
          <h1 className="text-4xl  pt-10 ml-72  font-turrerRod mb-5 text-rose-300">
            Update Your Product
          </h1>
          <form onSubmit={handleUpdate}>
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
                    defaultValue={brandName}
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
                    defaultValue={name}
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
                    defaultValue={type}
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
                    defaultValue={price}
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
                    defaultValue={rating}
                    placeholder="Rating"
                    className="input input-bordered bg-slate-200  w-96"
                  />
                </label>
              </div>
            </div>

            <div className="form-control ">
              <label className="input-group ml-72 mb-5">
                <input
                  type="submit"
                  value="Update"
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
