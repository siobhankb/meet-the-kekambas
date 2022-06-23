import React from 'react'
import { Link } from "react-router-dom";
import { getKoaders } from '../data'

export default function Nav({ brand }) {
  let people = getKoaders();
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="nav-link active text-warning  fs-3 fw-bold" to="/kekambas" >
            {brand}
          </Link>
          <ul>
            {people.map((p,i) => {
              <li key={i} >
                <Link to={`kewl-koader/${p.id}`} >{p.first_name}</Link>
              </li>
            })}
          </ul>
          {/* <Link className="nav-link active text-white" to="/kewl-koader" >Seven
          </Link> */}
        </div>
      </nav>
    </div>
  );
}
