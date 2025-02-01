import React from "react";
import MyNavbar from "./components/MyNavbar";
import Sidebar from "./components/Sidebar";
import { Row } from "react-bootstrap";
import MainContent from "./components/Dashboard/MainContent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "./components/pages/Page1";  
import Page2 from "./components/pages/Page2";
import CustomForm from "./components/form/CustomForm";
import Format from "./components/table/SmallBox"; 


const App = () => {
  return (
    <>
      <Row>
        <BrowserRouter>

          <MyNavbar/>
          <Sidebar />
          {/* <MainContent/> */}

          {/* <Format/> */}
          {/* <CustomForm/> */}

          <Routes>
            
            <Route path="/" element={<MainContent />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/customform" element={<CustomForm />} />
            <Route path="/format" element={<Format />} /> 
          </Routes>

        </BrowserRouter>
      </Row>
    </>
  );
};

export default App;
