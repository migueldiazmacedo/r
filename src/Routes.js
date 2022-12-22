import React from "react";
import WireframeOne from "pages/WireframeOne";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/wireframeone" element={<WireframeOne />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
