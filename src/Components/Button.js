import React from "react";
import { useTheme } from "../Contexts/ThemeContext";

const Button = () => {
  const { darkTheme, changeTheme } = useTheme();
  const buttonStles = {
    width: "150px",
    padding: "20px",
    borderRadius: "10px",
    border: "0px",
    backgroundColor: "green",
    color: "white",
    marginTop: "20px"
  };
  return (
    <button
      onClick={() => {
        changeTheme(!darkTheme);
      }}
      style={buttonStles}
    >
      Change Theme
    </button>
  );
};

export default Button;
