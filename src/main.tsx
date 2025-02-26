import "./styles/globals.module.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./components/Header/Header.tsx";
import { EmployeesPage } from "./pages/EmployeesPage/EmployeesPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <EmployeesPage />
  </StrictMode>,
);
