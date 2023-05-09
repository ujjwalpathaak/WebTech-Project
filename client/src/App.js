import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import HealthCard from "./pages/HealthCard/HealthCard";
import GiveMedicalLeave from "./pages/GiveMedicalLeave";
import Landing from "./pages/LandingPage/Landing";
import StudentDashboard from "./pages/StudentDashboard";
import Login from "./pages/StudentLogin";
import Videocall from "./pages/VideoCall";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/studentLogin" element={<Login />} />
        <Route path="/studentDashboard" element={<StudentDashboard />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/videoCall" element={<Videocall />} />
        <Route path="/medicalCard" element={<HealthCard />} />
        <Route path="/giveMedicalLeave" element={<GiveMedicalLeave />} />
      </Routes>
    </div>
  );
}

export default App;
