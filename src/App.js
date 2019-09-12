import React from "react";
import "./App.css";
import NasaGrid from "./components/NasaGrid";
import NavGrid from "./components/NavGrid";

function App() {
  return (
    <div className="App">
      <NavGrid />
      
      <NasaGrid />
    </div>
  );
}

export default App;
