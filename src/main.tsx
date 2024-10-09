import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ModalProvider from "./providers/ModalProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ModalProvider />
    <App />
  </StrictMode>
);
