import React from 'react'
import { Link } from "react-router-dom";
import Home from '../Views/Home';
import Spotlight from '../Views/Spotlight';

export default function Nav( { brand }) {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="nav-link active text-warning  fs-3 fw-bold" to="/kekambas" >
            {brand}
          </Link>
          {/* <Link className="nav-link active text-white" to="/kewl-koader" >Seven
          </Link> */}
        </div>
      </nav>
    </div>
  );
}
