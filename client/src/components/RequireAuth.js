import { Navigate } from "react-router-dom";

export default function RequireAuth({ children }) {
  const fakeAuth = localStorage.getItem("access_token");

  if (!fakeAuth) {
    return <Navigate to={"/signin"} />;
  }

  return children;
}
