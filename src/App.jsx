import "./App.css";
import React, { useState } from "react";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import { AsatidzLogin, SantriGet } from "./api";
import Session from "./session";
import DashboardPage from "./components/DashboardPage";
import StaffPage from "./components/StaffPage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  const handleLoginAsatidz = async (data) => {
    await AsatidzLogin(data, (response) => {
      console.log(response);
      if (response.message == "Berhasil login") {
        Session.setItem("login", true);
        Session.setItem("name", response.data.name);
        Session.setItem("entry_year", response.data.entry_year);
        Session.setItem("gender", response.data.gender);
        Session.setItem("telephone_number", response.data.telephone_number);
        Session.setItem("job", response.data.job);
      }
    });
  };

  const handleLoginSantri = async (data) => {
    // console.log(`santri no: ${data.phone}, pass: ${data.password}`);
    // console.log(`login: ${Session.getItem("login")}`);
    // console.log(`name: ${Session.getItem("name")}`);
    // console.log(`entry_year: ${Session.getItem("entry_year")}`);
    // console.log(`gender: ${Session.getItem("gender")}`);
    // console.log(`telephone: ${Session.getItem("telephone_number")}`);
    await SantriGet((response) => {
      console.log(response);
    });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/asatidz"
          element={<LoginPage asatidz={true} value={handleLoginAsatidz} />}
        />
        <Route path="/asatidz/dashboard" element={<DashboardPage />} />
        <Route path="/santri/dashboard" element={<h1>SANTRI</h1>} />
        <Route path="/asatidz/staff" element={<StaffPage />} />
        <Route
          path="/santri"
          element={<LoginPage asatidz={false} value={handleLoginSantri} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
