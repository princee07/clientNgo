import React from "react";
import { Routes, Route } from "react-router-dom"; // ❌ No BrowserRouter here!
import HomePage from "./pages/HomePage";
import VolunteerPage from "./pages/VolunteerPage";
import About from "./pages/About";
import Projectpage from "./pages/Project";
import Faqs from "./pages/Faqs";
import ContactUs from "./pages/ContactUs";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/volunteer" element={<VolunteerPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projectpage />} />
      <Route path="/faq" element={<Faqs />} />
      <Route path = "/contact" element = {<ContactUs/>} />
    </Routes>
  );
}

export default App;
