import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import { AuthContexts } from "../AuthProvider/AuthProvider";
import swal from "sweetalert";

const ViewDetails = () => {
  const viewDetail = useLoaderData();
  const { PhotoUrl, name, price, rating, shortDescription, type } = viewDetail;
  console.log(viewDetail);
  const handleAddToCart = () => {
    const card = { ...viewDetail };
    delete card._id;

    fetch("https://entertainment-media.vercel.app/cartProduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(card),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          swal("my cart added successfully!", "success");
        }
      });
  };
  // const viewDetail = useLoaderData();

  // console.log(viewDetail);

  // const [viewdetails, setviewDetails] = useState([]);
  // const { brandName } = useParams();
  // useEffect(() => {
  //   fetch(` https://entertainment-media.vercel.app/product/${brandName}`, {})
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("abc", data);
  //       setviewDetails(data);
  //     });
  // }, [brandName]);
  return (
    <div>
      <Navbar></Navbar>
      <div className="pt-10 pb-10">
        <div className="card card-compact w-96 bg-base-100 shadow-xl ml-32">
          <figure>
            <img src={PhotoUrl}></img>
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{shortDescription}</p>
            <div className="card-actions justify-end">
              <button
                onClick={handleAddToCart}
                className="btn bg-red-300 hover:bg-orange-600"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ViewDetails;
