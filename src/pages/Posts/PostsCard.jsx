import React from "react";
import { getRandomColor, invertColor } from "../../utils/generators.utils";
import "./Posts.styles.css";

const PostsCard = ({ post }) => {
  const bgColor = getRandomColor();
  const fontColor = invertColor(bgColor);

  return (
    <div className="post__container" style={{ backgroundColor: bgColor, color: fontColor }}>
      <div className="post__card">
        <div className="card__title">
          <p>
            #{post.id} {""}
            {post.title.substring(0, 20)}...
          </p>
        </div>
        <div className="card__content">
          <p>{post.body}</p>
        </div>
      </div>
    </div>
  );
};

export default PostsCard;
