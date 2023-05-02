import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import "./index.css";
import SignUp from "./Pages/SignUp";
import News from "./Pages/News";

const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem("token");
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

const CheckLoginRoute = () => {
  const isAuthenticated = localStorage.getItem("token");
  console.log(isAuthenticated);
  return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute />}>
          <Route path="/news" element={<News />} />

          </Route>
          <Route element={<CheckLoginRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/create-account" element={<SignUp />} />
          </Route>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
