import React from "react";
import ReactDOM from "react-dom/client";

import MainPage from "./components/MainPage";
import { AuthProvider } from "./contexts/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <MainPage></MainPage>
    </AuthProvider>
  </React.StrictMode>
);
