import React from "react";
import "./AboutDetailsStyle.css";

const AboutDetails = ({ details }) => {
  return (
    <div className='details'>
      <h1 style={{ color: `${details.color}` }}>{details.name}</h1>
      <p className='text'>{details.text}</p>
    </div>
  );
};

export default AboutDetails;
