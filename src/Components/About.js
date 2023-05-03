import React, { useState } from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/homepage.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs";
import axios from "axios";

const About = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [result, setResult] = useState("");

  const handleClick = () => {
    setSelectedFile(null);
    setImagePreview(null);
    setResult("");
  };
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];

    setSelectedFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedFile) {
      const data = new FormData();
      data.append("file", selectedFile);

      const res = await axios.post("http://localhost:8080/predict", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (res.status === 200) {
        setResult(res.data);
      }
    } else {
      alert("Please select an image");
    }
  };

  return (
    <div id="about_component" className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Predict</p>
        <h1 className="primary-heading">Upload Your Photo</h1>
        {/* <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <p className="primary-text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam.
        </p> */}
        <div className="about-buttons-container">
          <button className="secondary-button" onClick={handleSubmit}>
            Predict Disease
          </button>
          <button className="watch-video-button">
            <input
              onClick={handleClick}
              type="file"
              onChange={handleFileInputChange}
            />
            {selectedFile && <img src={imagePreview} alt="Loading" />}
          </button>
        </div>
        {result && (
          <div style={{ marginTop: 20 }}>
            <div
              style={{
                textAlign: "center",
                height: 50,
                fontFamily: "serif",
                fontWeight: 200,
                border: 1,
                borderColor: "red",
                color: "white",
                backgroundColor: "red",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 20,
                borderRadius: 20,
              }}
            >
              {result && result}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
