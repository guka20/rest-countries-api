import React from "react";
import { useRoutes } from "react-router-dom";
import { Home } from "../components/Home";

export const Routers = () => {
  let routes = useRoutes([{ path: "/", element: <Home /> }]);
  return <>{routes}</>;
};
