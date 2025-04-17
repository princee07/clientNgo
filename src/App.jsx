import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter
import HomePage from "./pages/HomePage";
import VolunteerPage from "./pages/VolunteerPage";
import About from "./pages/About";
function App() {
  return (
  <Router>
  

   
    <Routes>
      <Route path = "/" element = {<HomePage/>}/>
      <Route path="/volunteer" element={<VolunteerPage />} />
      <Route path = "/about" element = {<About/>} />
    </Routes>
      
     

  </Router>
  )

}

export default App;
