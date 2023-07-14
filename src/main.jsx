import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Routes from "./components/Routes/Routes.jsx";
import Home from "./components/pages/Home/Home.jsx";
import AllProducts from "./components/pages/AllProducts/AllProducts";
import Login from "./components/pages/Login/Login";
import SignUp from "./components/pages/SignUp/SignUp";
import Contact from "./components/pages/Contact/Contact";
import AuthProvider from "./context/Auth/AuthProvider";
import ToyDetails from "./components/pages/AllProducts/ToyDetails";
import AOS from "aos";
import "aos/dist/aos.css";
import AddToys from "./components/pages/AddToys/AddToys";
import MyToys from "./components/pages/MyToys/MyToys";
import Blog from "./components/pages/Blog/Blog";
import AllToys from "./components/pages/AllToys/AllToys";
import Error from "./components/pages/Error/Error";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PrivateRoute from "./components/Routes/PrivateRoute";

AOS.init();

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes></Routes>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "allToys",
        element: <AllToys></AllToys>,
      },
      {
        path: "allProducts",
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
        element: <Contact></Contact>,
      },
      {
        path: "toyDetails/:id",
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://kids-land.vercel.app/toyDetails/${params.id}`),
      },
      {
        path: "addToys",
        element: <AddToys></AddToys>,
      },
      {
        path: "myToys",
        element: <MyToys></MyToys>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
