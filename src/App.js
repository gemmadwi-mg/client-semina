import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import PageCategories from "./pages/categories";
import PageDashboard from "./pages/dashboard";
import PageSignIn from "./pages/signin";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageDashboard />} />
        <Route path="/signin" element={<PageSignIn />} />
        <Route path="/categories" element={<PageCategories />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
