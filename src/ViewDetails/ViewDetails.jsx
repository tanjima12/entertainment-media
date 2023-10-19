import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewDetails = () => {
  const [viewdetails, setviewDetails] = useState([]);
  const { BrandName } = useParams();
  useEffect(() => {
    fetch(` http://localhost:5000/product/${BrandName}`, {})
      .then((res) => res.json())
      .then((data) => {
        setviewDetails(data);
      });
  }, [BrandName]);
  return (
    <div>
      <p className="text-white h-[600px]">{viewdetails.name}</p>
    </div>
  );
};

export default ViewDetails;
