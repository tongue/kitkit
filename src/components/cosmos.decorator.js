import React from "react";
import { ThemeProvider } from "emotion-theming";
import Global from "./Global";
import theme from "../theme";

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <Global>{children}</Global>
  </ThemeProvider>
);
