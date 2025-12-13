import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";  
import Home from "./pages/home/home.jsx";
import Customers from "./pages/customers/customers.jsx";  
import Product from "./pages/product/Product.jsx";
import Single from "./pages/single/Single.jsx";
import New from "./pages/new/New.jsx";
import './app.css';
import React from "react";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/customers/",
    element: <Customers />,
  },
  {
    path: "/products/",
    element: <Product />,
  },
  {
    path: "/products/:productId/new/",
    element: <New />,
  },
  {
    path: "/customers/:customerId/new/",
    element: <New />,
  },
  {
    path: "/customers/:customerId",
    element: <Single />,
  },
  {
    path: "/products/:productId/",
    element: <Single />,
  },
  {
    path: "/login/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  // {
  //   path: "/",
  //   element: <Home />,
  // },
]);


function App() {  
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>

  );

    
}

export default App
