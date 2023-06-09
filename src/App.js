import React from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import "./styles/style.scss";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
    </div>
  );
}

export default App;
