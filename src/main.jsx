import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; // ← これが必要
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
