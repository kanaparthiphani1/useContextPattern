import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  const changeTheme = (val) => {
    setDarkTheme(val);
  };
  return (
    <ThemeContext.Provider value={{ darkTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
