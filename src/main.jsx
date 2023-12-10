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
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Branddetails from "./BrandDetails/Branddetails";
import UpdateProduct from "./UpdateProduct/UpdateProduct";
import ViewDetails from "./ViewDetails/ViewDetails";
import MyCart from "./MyCart/MyCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <EroorPage></EroorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/brand.json"),
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/brandDetails/:BrandName",
        element: <Branddetails></Branddetails>,
      },
      {
        path: "/viewDetails/:id",
        element: (
          <PrivateRoute>
            {" "}
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        // loader: () => fetch("https://entertainment-media-18bcayzop-tanjima-akters-projects.vercel.app/product"),
        loader: ({ params }) =>
          fetch(
            `https://entertainment-media-18bcayzop-tanjima-akters-projects.vercel.app/productDetails/${params.id}`
          ),
      },
      {
        path: "/updateProduct/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://entertainment-media-18bcayzop-tanjima-akters-projects.vercel.app/updateProduct/${params.id}`
          ),
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://entertainment-media-18bcayzop-tanjima-akters-projects.vercel.app/CartCollect"
          ),
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
