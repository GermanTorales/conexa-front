import React from "react";
import "./Photos.styles.css";

const PhotoCard = ({ photo }) => {
  return (
    <div className="photo__container">
      <div className="photo__card">
        <div className="card__title">
          <p>
            #{photo.id} {""}
            {photo.title.substring(0, 18)}...
          </p>
        </div>
        <div className="card__photo">
          <img src={photo.url} alt={photo.albumId} />
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
