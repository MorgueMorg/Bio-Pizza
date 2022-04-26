import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddProductPage from "./pages/AddProductPage";
import AdminPage from "./pages/AdminPage";
import EditProductPage from "./pages/EditProduct";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/admin-panel/add" element={<AddProductPage />} />
        <Route path="/admin-panel" element={<AdminPage />} />
        <Route path="/admin-panel/edit/:id" element={<EditProductPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
