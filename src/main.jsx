import React from "react";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/routes.jsx";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </StrictMode>
);
