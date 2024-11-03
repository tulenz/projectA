import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "../pages/landing-page";
import Aboutpage from "../pages/about-page";
import Contactpage from "../pages/contact-page";

function UnauthenticatedApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/contact" element={<Contactpage />} />
      </Routes>
    </Router>
  );
}

export default UnauthenticatedApp;
