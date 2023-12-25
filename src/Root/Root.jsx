import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="bg-[#264348]">
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
