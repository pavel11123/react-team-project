import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import PostPage from "./pages/PostPage/PostPage";
import { BrowserRouter } from "react-router-dom";
import CatalogPage from "./pages/CatalogPage/CatalogPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    
    <App />
    
  </BrowserRouter>
);
