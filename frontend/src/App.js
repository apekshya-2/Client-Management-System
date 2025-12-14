import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Product from "./pages/product/Product";
import Customers from "./pages/customers/Customers";
import UserHomeScreen from "./pages/userHome/UserHomeScreen";
import ProtectedRoute from "./routes/ProtectedRoute";

import { userInputs, productInputs } from "./formData";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute role="admin">
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "/user",
    element: (
      <ProtectedRoute role="user">
        <UserHomeScreen />
      </ProtectedRoute>
    ),
  },
  {
    path: "/users",
    element: (
      <ProtectedRoute role="admin">
        <Customers />
      </ProtectedRoute>
    ),
  },
  {
    path: "/products",
    element: (
      <ProtectedRoute role="admin">
        <Product />
      </ProtectedRoute>
    ),
  },
  {
    path: "/users/:userId",
    element: (
      <ProtectedRoute role="admin">
        <Single />
      </ProtectedRoute>
    ),
  },
  {
    path: "/products/:productId",
    element: (
      <ProtectedRoute role="admin">
        <Single />
      </ProtectedRoute>
    ),
  },
  {
    path: "/users/:userId/new",
    element: (
      <ProtectedRoute role="admin">
        <New inputs={userInputs} title="Add New User" />
      </ProtectedRoute>
    ),
  },
  {
    path: "/products/:productId/new",
    element: (
      <ProtectedRoute role="admin">
        <New inputs={productInputs} title="Add New Product" />
      </ProtectedRoute>
    ),
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <RouterProvider router={router} />
       <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
