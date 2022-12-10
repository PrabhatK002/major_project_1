import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Navbar from './components/Navbar';
//import { BrowserRouter as Router} from 'react-router-dom';
// import Sidebar from './components/Sidebar';
import Home from "./pages/Home/index.js";
import PatientSigninPage from "./pages/Patient/patient_signin";
import PatientSignupPage from "./pages/Patient/patient_signup";
import PatientAddPage from "./pages/Patient/patient_add";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/patient_signin" element={<PatientSigninPage />}></Route>
        <Route path="/patient_signup" element={<PatientSignupPage />}></Route>
        <Route path="/patient_add" element={<PatientAddPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
