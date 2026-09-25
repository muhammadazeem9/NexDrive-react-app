import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = () => {
  const location = useLocation();
  const { user, loading } = useAuth();

  // Wait until authentication check is finished
  if (loading) {
    return <div>Loading...</div>;
  }

  // Not authenticated
  if (!user) {
    return <Navigate to="/auth" replace state={{ from: location }} />;
  }

  // Authenticated
  return <Outlet />;
};

export default ProtectedRoute;
