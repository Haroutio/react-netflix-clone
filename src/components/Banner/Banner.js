import React from "react";
import "./Banner.css";

function Banner() {
  // ! Continue Here
  function truncate(string, n) {}

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url('https://cdnb.artstation.com/p/assets/images/images/054/747/843/large/joshua-smith-photo08-10-2022-8-04-01-pm.jpg?1665276364')`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          This is a test descriptionThis is a test description This is a test
          description This is a test description This is a test description This
          is a test description This is a test description This is a test
          description This is a test description
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
