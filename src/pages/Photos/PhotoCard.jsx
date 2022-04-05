import React from 'react';
import './Photos.styles.css';

const PhotoCard = ({ photo }) => {
  const { innerWidth: width } = window;
  const title = width < 768 ? `#${photo.id}` : `#${photo.id} ${photo.title.substring(0, 20)}`;

  return (
    <div className="photo__container">
      <div className="photo__card">
        <div className="card__title">
          <p>{title}</p>
        </div>
        <div className="card__photo">
          <img src={photo.url} alt={photo.albumId} />
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
