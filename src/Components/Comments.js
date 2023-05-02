import axios from "axios";
import React, { useEffect } from "react";

const Comments = ({ comment }) => {
  // const getComment = async () => {
  //   const res = await axios.get(
  //     "http://localhost:8000/api/comment/" + comment._id
  //   );
  //   console.log(res);
  // };
  // useEffect(() => {
  //   getComment();
  // });
  return (
    <div
      style={{
        marginTop: 10,
        backgroundColor: "white",
        padding: 4,
        width: 400,
        borderRadius: 10,
        color: "gray",
      }}
    >
      {comment.comment}
    </div>
  );
};

export default Comments;
