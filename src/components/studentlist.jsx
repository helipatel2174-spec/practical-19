
import React, { useState } from "react";

function StudentList() {
  const [students, setStudents] = useState([
    { id: 1, name: "Heli Patel", course: "BCA" },
    { id: 2, name: "Rahul Shah", course: "BCA" },
    { id: 3, name: "Priya Patel", course: "BBA" },
    { id: 4, name: "Amit Patel", course: "BCA" }
  ]);

  const handleDelete = (id) => {
    setStudents(
      students.filter((student) => student.id !== id)
    );
  };

  return (
    <div className="student-container">
      <h2>Student Management System</h2>

      {students.length === 0 ? (
        <p>No students available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Student Name</th>
              <th>Course</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <p>Total Students: {students.length}</p>
    </div>
  );
}

export default StudentList;
