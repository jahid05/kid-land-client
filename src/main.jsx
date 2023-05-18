import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Routes from './components/Routes/Routes.jsx';
import Home from './components/pages/Home/Home.jsx';
import AllProducts from './components/pages/AllProducts/AllProducts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Routes></Routes>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'allProducts',
        element: <AllProducts></AllProducts>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
