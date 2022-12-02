import React from "react";
import Button from "./Components/Button";
import Container from "./Components/Container";
import { ThemeProvider } from "./Contexts/ThemeContext";
import "./styles.css";

export default function App() {
  return (
    <ThemeProvider>
      <Container />
      <Button />
    </ThemeProvider>
  );
}
