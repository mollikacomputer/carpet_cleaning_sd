"use client";

import AuthProvider from "../contexts/AuthProvider";
import ThemeProvider from "./ThemeProvider";

const Providers = ({ children }) => {
  return (
    <ThemeProvider>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
};

export default Providers;
