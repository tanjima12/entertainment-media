import Navbar from "../Navbar/Navbar";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const BrandName = form.brandname.value;
    const name = form.name.value;
    const type = form.type.value;
    const price = form.price.value;
    const shortDescription = form.description.value;
    const rating = form.rating.value;
    const PhotoUrl = form.photo.value;
    const addProductInfo = {
      name,
      BrandName,
      type,
      price,
      shortDescription,
      rating,
      PhotoUrl,
    };
    console.log(addProductInfo);
    fetch(
      "https://entertainment-media-18bcayzop-tanjima-akters-projects.vercel.app/product",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addProductInfo),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="ml-80">
        <div className="homebg h-[900px]">
          <h1 className="text-4xl  pt-10 ml-72  font-turrerRod mb-5 text-rose-300">
            Please Add Product
          </h1>
          <form onSubmit={handleAddProduct}>
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
                  <span className="label-text text-white text-2xl">
                    Short Description
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="description"
                    placeholder="description"
                    className="input input-bordered  w-96"
                  />
                </label>
              </div>
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
            <div className="ml-5">
              <label className="label">
                <span className="label-text text-white text-2xl">
                  Photo Url
                </span>
              </label>
              <label className="input-group mb-5">
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URl"
                  className="input input-bordered bg-slate-200  w-[768px] "
                />
              </label>
            </div>
            <div className="form-control ">
              <label className="input-group ml-72 mb-5">
                <input
                  type="Submit"
                  value="ADD PRODUCT"
                  className="input input-bordered  w-96 bg-yellow-600"
                />
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
