import * as React from "react";
// eslint-disable-next-line
import { createRoot } from "react-dom/client";
// eslint-disable-next-line
import { createBrowserRouter, RouterProvider, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Books from "./pages/Books";
import Add from "./pages/Add";
import Update from "./pages/Update";
import "./style.css"
// eslint-disable-next-line


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books/>} />  
          <Route path="/add" element={<Add />} />  
          <Route path="/Update/:id" element={<Update />} />  
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
