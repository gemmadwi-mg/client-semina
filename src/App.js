import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import PageSignIn from "./pages/signin";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>home</>} />
        <Route path="signin" element={<PageSignIn />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
