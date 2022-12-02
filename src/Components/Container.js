import React from "react";
import { useTheme } from "../Contexts/ThemeContext";

const Container = () => {
  const { darkTheme } = useTheme();
  const themeStyle = {
    width: "300px",
    height: "300px",
    backgroundColor: darkTheme ? "black" : "white",
    color: darkTheme ? "white" : "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  return (
    <div style={themeStyle}>
      <h1>Theme</h1>
    </div>
  );
};

export default Container;
