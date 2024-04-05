import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./Styles/RootStyle/index.css";
import "./Styles/Animations/Animations.css";
import { ModalProvider } from "./providers/modal.tsx";
import { TechProvider } from "./providers/tech.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TechProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </TechProvider>
  </React.StrictMode>
);
