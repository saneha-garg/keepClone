import React from "react";
import logo from "./Images/logo.png";

const Header = () => {
  return (
    <>
      <div className="header">
      <div className="logo">
        <img  src={logo} alt="logo" width="70"  height="50" />
        </div>
        <h1> My Keeper</h1>
      </div>
    </>
  );
};

export default Header;