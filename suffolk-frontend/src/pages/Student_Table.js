// rfc
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Student_Table() {
  const [students, setStudents] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const result = await axios.get("http://localhost:8080/students");
    setStudents(result.data);
  };

  const deleteStudent = async (id) => {
    await axios.delete(`http://localhost:8080/student/${id}`);
    loadStudents();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table class="table border shadow">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Advisor Id</th>
              <th scope="col">Student Name</th>
              <th scope="col">Student Email</th>
              <th scope="col">Total Credits</th>
              <th scope="col">Major</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{student.advisor_id}</td>
                <td>{student.student_name}</td>
                <td>{student.student_email}</td>
                <td>{student.total_credit}</td>
                <td>{student.major}</td>
                <td>
                  <Link
                    className="btn btn-info mx-2"
                    to={`/viewStudent/${student.student_id}`}
                  >
                    {" "}
                    View
                  </Link>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/editStudent/${student.student_id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteStudent(student.student_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
