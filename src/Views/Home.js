import React, { useState, useEffect } from "react";
// import { Routes, Route, Link } from "react-router-dom";
import TableRow from "../Components/TableRow";

export default function Home() {
  const teachers = [
    {
      first_name: "Brian",
      id: 1,
      last_name: "Stanton",
    },
    {
      first_name: "Tatyana",
      id: 2,
      last_name: "Parks",
    },
  ];

//   const [students, setStudents] = useState([]);

//   useEffect(() => {
//     fetch(`https://kekambas-bs.herokuapp.com/kekambas`)
//       .then((res) => res.json())
//       .then((data) => {
//         const koaderNum = data.length;
//         setStudents(data);
//       });
//   }, []);

  // const handleLinkClick = (event) > {
  //     event.preventDefault();
  //     const aStudent = event.
  // }

  let headers = ["Role", "First", "Last", ""];
  return (
      <>
          <div>
              <h4 className="text-center" >Meet the Kekambas Kohort</h4>
          </div>
      <table className="table table-warning table-striped table-hover text-center">
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <TableRow key={teacher.first_name} teacher={teacher} />
          ))}
          {/* {students.map((student) => (
            <TableRow key={student} student={student} />
          ))} */}
        </tbody>
      </table>
    </>
  );
}
