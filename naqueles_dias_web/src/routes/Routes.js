import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import RegisterTwo from "../pages/RegisterTwo";


const AppRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/cadastro" element={<Register/>} />
          <Route path="/cadastro2" element={<RegisterTwo/>} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default AppRoutes;