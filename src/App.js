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
        <Route path="/signin" element={<PageSignIn />} />
        <Route path="/signin" element={<PageDashboard />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
