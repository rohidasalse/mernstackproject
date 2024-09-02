import React from "react";
import Home from "./components/home/Home.jsx";
import About from "./components/home/About.jsx";
import Contact from "./components/home/Contact.jsx";
import Cources from "./components/home/Cources.jsx";
import Services from "./components/home/Services.jsx";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="light:bg-white light:text-black">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cources" element={<Cources />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
