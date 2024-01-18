import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import RepositoriesPage from "./pages/RepositoriesPage";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/:login/repositories" element={<RepositoriesPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}
