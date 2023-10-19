import React from "react";
import ReactDOM from "react-dom/client";

import MainPage from "./components/MainPage";
import { AuthProvider } from "./contexts/AuthContext";
import { ModalProvider } from "./contexts/ModalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ModalProvider>
        <MainPage></MainPage>
      </ModalProvider>
    </AuthProvider>
  </React.StrictMode>
);
