import React from "react";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
   return (
      <Router>
         <Routes>
            <Route index element={<HomePage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/gallery" element={<Gallery />} />
         </Routes>
      </Router>
   )
}

export default App