import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const user = useSelector((state) => state.user);
  if (!user.accessToken) {
    return <Navigate to="/" />;
  }
  return children;
};

export default RequireAuth;
