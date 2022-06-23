import React, { useState } from 'react'
import {Outlet} from 'react-router-dom'
import KoaderKard from "../Components/KoaderKard";

export default function Spotlight(props) {
  const [person, setPerson] = useState([{ first_name: 'Yakov', last_name: 'Smirnov', id: 3 }]);
  if (props.person) setPerson(person)
  
  return (
    <div className="col col-md-4">
      <h3>Kewl Koader</h3>
      <KoaderKard person={person} />
      <Outlet />
    </div>
  );
}
