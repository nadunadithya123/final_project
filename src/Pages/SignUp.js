import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    firstName: "",
    email: "",
    password: "",
  });

  const { firstName, email, password } = userData;

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (firstName.length > 0 || email.length > 0 || password.length > 0) {
      try {
        const res = await axios.post(
          "http://localhost:8000/api/auth/createAccount",
          userData
        );
        console.log(res);
        if (res.status === 200) {
          navigate("/login");
        }
      } catch (error) {
        console.log(error.responseStatus);
        alert("Please check your credentials");
      }
    } else {
      alert("All the fields are required");
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
            <h1 style={{ textAlign: "center", marginBottom: "32px" }}>
              Create account
            </h1>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "16px" }}>
                <label htmlFor="username">firstName:</label>
                <input
                  type="text"
                  id="username"
                  name="firstName"
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                  value={firstName}
                  onChange={handleChange}
                />
              </div>
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
                Create
              </button>
            </form>
            <h4
              onClick={() => navigate("/login")}
              style={{
                marginTop: 10,
                textAlign: "center",
                fontWeight: "lighter",
                cursor: "pointer",
              }}
            >
              Do you have an account?
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
