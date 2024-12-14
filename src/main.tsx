import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { App } from "./app/App.tsx";

const root = document.getElementById("root");
if (!root) throw new Error("No root element found");

// mounted to the DOM here (the entry point)
createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);
