import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import AppHeader from "./AppHeader/AppHeader";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppHeader />
    <App />
    
  </React.StrictMode>
);
