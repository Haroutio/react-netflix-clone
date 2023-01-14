import React from "react";
import "./HomeScreen.css";
import { Nav, Banner, Row } from "../";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
    </div>
  );
}

export default HomeScreen;
