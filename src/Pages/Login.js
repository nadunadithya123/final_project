import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userData;

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/login",
        userData
      );
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.user._id);

        navigate("/");
      }
    } catch (error) {
      alert("Please check your credentials");
    }
  };

  console.log(userData);
  return (
    <div className="w-screen h-screen  px-36">
      <Navbar />
      <div
        style={{
          width: "80vw",
          height: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
              padding: "32px",
              //   maxWidth: "px",
              width: "400px",
            }}
          >
            <h1 style={{ textAlign: "center", marginBottom: "32px" }}>Login</h1>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "16px" }}>
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="email"
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div style={{ marginBottom: "16px" }}>
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                  value={password}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                style={{
                  display: "block",
                  width: "100%",
                  padding: "8px",
                  borderRadius: "4px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                }}
              >
                Login
              </button>
            </form>
            <h4
              onClick={() => navigate("/create-account")}
              style={{
                marginTop: 10,
                textAlign: "center",
                fontWeight: "lighter",
                cursor: "pointer",
              }}
            >
              Don't you have an account?
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
