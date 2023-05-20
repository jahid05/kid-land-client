import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Routes from "./components/Routes/Routes.jsx";
import Home from "./components/pages/Home/Home.jsx";
import AllProducts from "./components/pages/AllProducts/AllProducts";
import Login from "./components/pages/Login/Login";
import SignUp from "./components/pages/SignUp/SignUp";
import AuthProvider from "./components/Context/AuthProvider";
import Error from "./components/pages/Error/Error";
import Contact from "./components/pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes></Routes>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "allToys",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "contact",
        element: <Contact></Contact>
      }
    ],
  },
  {
    path: '*',
    element: <Error></Error>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
