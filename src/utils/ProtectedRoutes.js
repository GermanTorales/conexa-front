import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ token, children }) => {
  const navigate = useNavigate();

  if (!token) navigate("/login");

  return children;
};

export default ProtectedRoute;
