import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const token = sessionStorage.getItem("authToken");
  const storedUser = JSON.parse(sessionStorage.getItem("userData"));

  if (!token || !storedUser?.isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  if (role && storedUser.userData.role !== role) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
