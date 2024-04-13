import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
//import { AuthProvider } from "./context/AuthContext.tsx";
//import { Toaster } from "react-hot-toast";

const theme = createTheme({
  typography: {
    fontFamily: "Noto Sans,serif",
    allVariants: { color: "white" },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
