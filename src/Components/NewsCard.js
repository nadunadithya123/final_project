import React, { useState } from "react";
import Comments from "./Comments";
import axios from "axios";

const NewsCard = ({ news, getNews }) => {
  const [newComment, setNewComment] = useState("");

  const addComment = async () => {
    const options = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"), // Replace authToken with your actual token
        "Content-Type": "application/json",
      },
    };
    const res = await axios.put(
      `http://localhost:8000/api/news/${news._id}/comment`,
      { comment: newComment },
      options
    );
    if (res.status === 200) {
      getNews();
    }
  };
  return (
    <div
      style={{
        backgroundColor: "gray",
        color: "white",
        padding: 16,
        borderRadius: 10,
        marginTop: 20,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ color: "orange", fontSize: 30 }}>{news.title}</div>
      <div>{news.body}</div>
      <div style={{ marginTop: 10 }}>
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
            placeholder="Comment"
            onChange={(e) => setNewComment(e.target.value)}
            style={{
              backgroundColor: "orange",
              width: 400,
              padding: 16,
              borderRadius: 20,
              border: 1,
              borderWidth: 10,
            }}
          />{" "}
          <button
            style={{ marginTop: 4, padding: 8, color: "orange" }}
            className=""
            onClick={addComment}
          >
            Submit
          </button>
        </div>
      </div>
      {news.comments.length > 0 &&
        news.comments.map((comment) => <Comments comment={comment} />)}
    </div>
  );
};

export default NewsCard;
