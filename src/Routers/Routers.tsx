import React from "react";
import { useRoutes } from "react-router-dom";
import { CountryPage } from "../components/CountryPage";
import { Home } from "../components/Home";

export const Routers = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/country", element: <CountryPage /> }
  ]);
  return <>{routes}</>;
};
