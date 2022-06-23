import React, { useState, useEffect } from "react";
import { getTeachers, getStudents } from '../data'
import TableRow from "../Components/TableRow";

export default function Home() {

  const students = getStudents();
  const teachers = getTeachers();
  const koaders = teachers.concat(students)

  let headers = ["Role", "First", "Last", ""];
  return (
    <>
      <div>
        <h4 className="text-center">Meet the Kekambas Kohort</h4>
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
          {koaders.map((koader) => (
            <TableRow key={koader.id} person={koader} />
          ))}
        </tbody>
      </table>
    </>
  );
}
