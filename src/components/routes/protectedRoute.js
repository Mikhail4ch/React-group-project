import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../provider/authProvider";

export const ProtectedRoute = () => {
    const { token } = useAuth();

    if (!token) {

      return <Navigate to="/" />;
    }
  
    return <Outlet />;
  };