import React, { useState, useEffect } from "react";
import Nav from "./Components/Nav";
import Home from "./Views/Home";
import Spotlight from "./Views/Spotlight"

import { Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <div id="fromApp">
      <Nav brand="Kekambas Kohort" />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="kewl-koader" element={<Spotlight />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
