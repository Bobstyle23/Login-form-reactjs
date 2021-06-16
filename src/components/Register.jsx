// import React, { Component } from "react";
import Input from "./Input";
import { useState } from "react";

function Register() {
  const [btnColor, setBtnColor] = useState(false);
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleBtnColor() {
    setBtnColor(true);
  }

  function handleMouseOut() {
    setBtnColor(false);
  }

  return (
    <form className="form">
      <Input
        onChange={handleChange}
        type="text"
        placeholder="Username"
        value={contact.fName}
      />
      <Input
        onChange={handleChange}
        type="email"
        placeholder="Email"
        value={contact.email}
      />
      <Input type="password" placeholder="Password" />
      <Input type="password" placeholder="Confirm Password" />

      <button
        style={{ backgroundColor: btnColor ? "black" : "white" }}
        onMouseOver={handleBtnColor}
        onMouseOut={handleMouseOut}
        type="submit"
      >
        Register
      </button>
    </form>
  );
}

export default Register;
