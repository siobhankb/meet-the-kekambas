import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Spotlight from '../Views/Spotlight';

export default function TableRow({ teacher }) {
    
    return (
      <>
        <tr>
          <th className="text-primary">{`Teacher`}</th>
          <td>{teacher.first_name}</td>
          <td>{teacher.last_name}</td>
          <td>
            <Link
              class="btn btn-primary text-warning fw-bold w-50"
              to={<Spotlight person={teacher}/>}>
              More about {teacher.first_name}
            </Link>
          </td>
        </tr>
        <tr>
          <th >{`Student`}</th>
          <td>{student.first_name}</td>
          <td>{student.last_name}</td>
          <td>
            <Link
              class="btn btn-primary text-warning fw-bold w-50"
              to={<Spotlight />}
            >
              More about {student.first_name}
            </Link>
          </td>
        </tr>
      </>
    );
}
