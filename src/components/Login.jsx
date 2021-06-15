// import React, { Component } from "react";
import Input from "./Input";
import { useState } from "react";

function Login() {
  const [btnColor, setBtnColor] = useState(false);

  function handleBtnColor() {
    setBtnColor(true);
  }

  function handleMouseOut() {
    setBtnColor(false);
  }
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <button
        style={{ backgroundColor: btnColor ? "black" : "white" }}
        onMouseOver={handleBtnColor}
        onMouseOut={handleMouseOut}
        type="submit"
      >
        Login
      </button>
    </form>
  );
}
export default Login;
