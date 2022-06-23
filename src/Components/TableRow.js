import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function TableRow({ person }) {

  if (person.id === 1 || person.id === 2) {
    return (
      <tr>
        <th className="text-primary">{`Teacher`}</th>
        <td>{person.first_name}</td>
        <td>{person.last_name}</td>
        <td>
          <Link
            className="btn btn-primary text-warning fw-bold w-50"
            to={`/kewl-koader/${person.id}`}>
            More about {person.first_name}
          </Link>
        </td>
      </tr>
    );
  } else {
    return (
      <tr>
        <th>{`Student`}</th>
        <td>{person.first_name}</td>
        <td>{person.last_name}</td>
        <td>
          <Link
            className="btn btn-primary text-warning fw-bold w-50"
            to={`/kewl-koader/${person.id}`}>
            More about {person.first_name}
          </Link>
        </td>
      </tr>
    );
  }
}
