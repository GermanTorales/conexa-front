import React from "react";
import PhotoCard from "./PhotoCard";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import "./Photos.styles.css";

const PhotosView = ({ photos, handleGoBack }) => {
  return (
    <div className="main__container">
      <div className="photos__go__back">
        <div className="photos__icon">
          <FaArrowAltCircleLeft onClick={handleGoBack} />
        </div>
        <p>Volver atras</p>
      </div>
      <div className="photos__title">
        <h1>Fotos</h1>
      </div>
      <div className="photos__container">
        {photos?.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default PhotosView;
