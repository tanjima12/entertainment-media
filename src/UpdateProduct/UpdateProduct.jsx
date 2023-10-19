import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
  const UpdateProduct = useLoaderData();
  return <div className="text-white">{UpdateProduct.name}</div>;
};

export default UpdateProduct;
