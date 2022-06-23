// import React, { useState, useEffect } from "react";

// const teachers = [
//     {
//       first_name: "Brian",
//       id: 1,
//       last_name: "Stanton",
//     },
//     {
//       first_name: "Tatyana",
//       id: 2,
//       last_name: "Parks",
//     },
//   ];

// export function getTeachers() {
//   return teachers
// }

// export function getStudents() {
//     const [students, setStudents] = useState([]);

//     useEffect(() => {
//       fetch(`https://kekambas-bs.herokuapp.com/kekambas`)
//         .then((res) => res.json())
//         .then((data) => {
//           setStudents(data);
//         });
//     }, []);

//   return students
// }

// export function getKoaders() {
//     const koaders = teachers.concat(students)
//     return koaders
// }

