import React, { useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProjectDetails from "./components/ProjectDetails";
import Home from "./Home.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project_details" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
