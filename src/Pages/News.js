import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/download.png";
import Comments from "../Components/Comments";
import axios from "axios";
import NewsCard from "../Components/NewsCard";
const News = () => {
  const [newNews, setNewNews] = useState("");
  const [newsTopic, setNewsTopic] = useState("");
  const [allNews, setAllNews] = useState([]);
  const handleClick = async () => {
    const options = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"), // Replace authToken with your actual token
        "Content-Type": "application/json",
      },
    };
    const data = {
      title: newsTopic,
      body: newNews,
    };
    const res = await axios.post(
      "http://localhost:8000/api/news",
      data,
      options
    );
    getNews();
    console.log(res);
  };

  const getNews = async () => {
    const res = await axios.get("http://localhost:8000/api/news");
    if (res.status === 200) {
      console.log(res);
      setAllNews(res.data);
    }
  };
  useEffect(() => {
    getNews();
  }, []);
  return (
    <div className="home-container home">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <div>
            <div>
              <div
                className=""
                style={{
                  width: "100%",
                  //   backgroundColor: "red",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <input
                  type="text"
                  placeholder="Topic"
                  onChange={(e) => setNewsTopic(e.target.value)}
                  style={{
                    backgroundColor: "white",
                    width: 400,
                    padding: 16,
                    borderRadius: 20,
                  }}
                />{" "}
              </div>
              <div
                className=""
                style={{
                  width: "100%",
                  //   backgroundColor: "red",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  marginTop: 10,
                }}
              >
                <textarea
                  type="text"
                  placeholder="Your news"
                  onChange={(e) => setNewNews(e.target.value)}
                  style={{
                    backgroundColor: "white",
                    width: 400,
                    padding: 16,
                    borderRadius: 20,
                  }}
                />{" "}
                <button
                  onClick={handleClick}
                  style={{ marginTop: 10 }}
                  className="secondary-button"
                >
                  Post
                </button>
              </div>
            </div>
            {allNews.length > 0 &&
              allNews.map((news, index) => (
                <NewsCard key={index} news={news} getNews={getNews} />
              ))}
          </div>
        </div>
        <div className="home-image-section">
          {/* <img src={BannerImage} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default News;
