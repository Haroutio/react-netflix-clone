import React from "react";
import "./App.css";
import { HomeScreen, Banner } from "./components";

function App() {
  return (
    <div className="app">
      <header className="App-header"></header>
      <HomeScreen />
      <Banner />
    </div>
  );
}

export default App;
