import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";


import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Sidebar from "./Component/Dashboard/Sidebar";
import Header from "./Component/Dashboard/Header";
import Home from "./Component/Dashboard/Home";
import Footer from "./Component/Dashboard/Footer";

function App() {
  return (
    <div className="App">
      {/* 
      <BrowserRouter>
        <Routes>
          <Route path="/widgets" element={<widgets />}/>
          <Route path="/footer" element={<Footer/>}/>
          <Route path="/header" element={<Header/>}/>
          
        </Routes>
      </BrowserRouter> */}
      <Header />
      <Sidebar />
      {/* <Footer /> */}

    </div>
  );
}

export default App;
