import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import PageDashboard from "./pages/dashboard";
import PageSignIn from "./pages/signin";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageDashboard />} />
        <Route path="/signin" element={<PageSignIn />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
