import React from "react";
import { Rings } from "react-loader-spinner";
import "./Spinner.styles.css";

const Spinner = () => {
  return (
    <div className="container">
      <div className="spinner">
        <Rings ariaLabel="loading-indicator" />
      </div>
    </div>
  );
};

export default Spinner;
