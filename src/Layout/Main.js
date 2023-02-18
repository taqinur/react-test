import React from "react";
import { Outlet } from "react-router-dom";
import LeftNavbar from "../components/LeftNavbar/LeftNavbar";

const Main = () => {
  return (
    <div className="flex">
      <LeftNavbar></LeftNavbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
