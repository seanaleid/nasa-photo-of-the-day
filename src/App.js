import React from "react";
import "./App.css";
// import NasaGrid from "./components/OriginalNasaCard/NasaGrid";
import NavGrid from "./components/OriginalNavCard/NavGrid";
import StyledNasaGrid from "./components/StyledNasaCard/StyledNasaGrid";
import StyledNavGrid from "./components/StyledNav/StyledNavGrid";

function App() {
  return (
    <div className="App">
      <NavGrid />
      <StyledNavGrid />
      
      {/* <NasaGrid /> */}
      <StyledNasaGrid />
    </div>
  );
}

export default App;
