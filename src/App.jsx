import React from "react";

function StudentList() {
  const students = [
    { id: 1, name: "Naveen", marks: 85 },
    { id: 2, name: "Rahul", marks: 32 },
    { id: 3, name: "Kiran", marks: 75 },
    { id: 4, name: "Arjun", marks: 25 },
    { id: 5, name: "Suresh", marks: 60 }
  ];

  return (
    <section className="card">
      <h2>Student List</h2>
      <table>
        <thead>
          <tr><th>ID</th><th>Name</th><th>Marks</th><th>Status</th></tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.marks}</td>
              <td>
                <span className={student.marks >= 35 ? "pass" : "fail"}>
                  {student.marks >= 35 ? "Pass" : "Fail"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

function Footer() {
  return <footer>Student Management System © 2026</footer>;
}

export default function App() {
  return (
    <div className="app">
      <header><h1>Student Management System</h1></header>
      <main><StudentList /></main>
      <Footer />
    </div>
  );
}
