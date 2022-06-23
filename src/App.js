import React from "react";
import Nav from "./Components/Nav";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <div id="fromApp">
      <Nav brand="Kekambas Kohort" />
      <div className="container"></div>
      <Outlet />
    </div>
  );
}

export default App;
