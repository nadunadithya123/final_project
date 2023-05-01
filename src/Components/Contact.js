import axios from "axios";
import React, { useEffect, useState } from "react";

const Contact = () => {
  const [solutions, setSolutions] = useState([]);
  const [searchText, setSearchText] = useState("");
  const getSolutions = async () => {
    const res = await axios.get("http://localhost:8000/api/solution");
    setSolutions(res.data);
  };
  useEffect(() => {
    getSolutions();
  }, []);
  return (
    <div id="contact_component" className="contact-page-wrapper">
      <h1 className="primary-heading">Search Disease Solution</h1>
      {/* <h1 className="primary-heading">Let Us Help You</h1> */}
      <div className="contact-form-container">
        <input type="text" placeholder="Type your disease here" />
        <button className="secondary-button">Search</button>
      </div>
      <div style={{ display: "felx", justifyContent: "center", marginTop: 40 }}>
        {solutions.length > 0 &&
          solutions.map((solution, index) => (
            <div
              key={index}
              style={{
                width: "1000px",
                textAlign: "center",
                backgroundColor: "orange",
                borderRadius: 20,
                marginTop: 20,
                padding: 10,
              }}
            >
              <h2 style={{ color: "white" }}>{solution.title}</h2>

              <h4 style={{ color: "gray", marginTop: 10 }}>
                {solution.solution}
              </h4>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Contact;
