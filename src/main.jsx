import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import Home from "./Home/Home";
import EroorPage from "./EroorPage";
import AddProduct from "./Addproduct/AddProduct";
import Register from "./Register/Register";
import LogIn from "./LogIn/LogIn";
import AuthProvider from "./AuthProvider/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <EroorPage></EroorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("brand.json"),
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
