import { Navigate, useNavigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const navigate = useNavigate();
  if (localStorage.getItem("token")) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default PublicRoute;
