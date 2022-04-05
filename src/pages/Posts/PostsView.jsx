import React from "react";
import PostsCard from "./PostsCard";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import "./Posts.styles.css";

const PostsView = ({ posts, handleGoBack, handlePageClick, pageCount }) => {
  return (
    <div className="main__container">
      <div className="posts__go__back">
        <div className="posts__icon">
          <FaArrowAltCircleLeft onClick={handleGoBack} />
        </div>
        <p>Volver atras</p>
      </div>
      <div className="posts__title">
        <h1>Posts</h1>
      </div>
      <div className="posts__container">
        {posts?.map((post) => (
          <PostsCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostsView;
