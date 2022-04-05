import React from "react";
import { Link } from "react-router-dom";

import "./Home.styles.css";

const HomeView = () => {
  return (
    <div className="container">
      <div className="pages__links">
        <div className="page__card">
          <Link to="/posts" className="page__button">
            Posts
          </Link>
        </div>
        <div className="page__card">
          <Link to="/photos" className="page__button">
            Photos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
