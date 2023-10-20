import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewDetails = () => {
  // const viewDetail = useLoaderData();

  // console.log(viewDetail);

  const [viewdetails, setviewDetails] = useState([]);
  const { brandName } = useParams();
  useEffect(() => {
    fetch(` http://localhost:5000/product/${brandName}`, {})
      .then((res) => res.json())
      .then((data) => {
        console.log("abc", data);
        setviewDetails(data);
      });
  }, [brandName]);
  return (
    <div>
      <p className="text-black">{viewdetails.brandName}</p>
    </div>
  );
};

export default ViewDetails;
