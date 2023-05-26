import React, { createContext, useState } from "react";

const ThemeContextC = createContext();

const ThemeProviderC = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const value = {
    theme,
    setTheme,
  };

  return (
    <ThemeContextC.Provider value={value}>{children}</ThemeContextC.Provider>
  );
};

export { ThemeContextC, ThemeProviderC };
