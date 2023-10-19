import React from "react";
import ReactDOM from "react-dom/client";

import MainPage from "./components/MainPage";
import { AuthProvider } from "./contexts/AuthContext";
import { ModalProvider } from "./contexts/ModalContext";
import { BookProvider } from "./contexts/BookContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ModalProvider>
        <BookProvider>
          <MainPage></MainPage>
        </BookProvider>
      </ModalProvider>
    </AuthProvider>
  </React.StrictMode>
);
