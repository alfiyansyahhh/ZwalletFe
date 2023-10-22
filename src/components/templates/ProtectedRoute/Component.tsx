import React from "react";
import { Navigate } from "react-router-dom";
import { IProtectRouteProps } from "./interface";

const Component: React.FC<IProtectRouteProps> = ({
  children,
  isAllowed,
  redirectPath = "/login",
}) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default Component;
