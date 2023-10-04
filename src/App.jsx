import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Card } from "./Card";
import "./App.css";
import { Nav } from "./nav";

function App() {
  return (
    <div>
      <Nav />
      <div className="abuelo-cards">
        <Card />
      </div>
    </div>
  );
}

export default App;
