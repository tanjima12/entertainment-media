import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="homebg">
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
