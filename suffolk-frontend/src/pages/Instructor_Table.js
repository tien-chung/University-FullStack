// rfc
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Instructor_Table() {
  const [instructors, setInstructors] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadInstructors();
  }, []);

  const loadInstructors = async () => {
    const result = await axios.get("http://localhost:8080/instructors");
    setInstructors(result.data);
  };

  const deleteInstructor = async (id) => {
    await axios.delete(`http://localhost:8080/instructor/${id}`);
    loadInstructors();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table class="table border shadow">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Instructor Name</th>
              <th scope="col">Department Id</th>
              <th scope="col">Instructor Email</th>
            </tr>
          </thead>
          <tbody>
            {instructors.map((instructor, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{instructor.instructor_name}</td>
                <td>{instructor.dept_id}</td>
                <td>{instructor.instructor_email}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewInstructor/${instructor.id}`}
                  >
                    {" "}
                    View
                  </Link>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/editInstructor/${instructor.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteInstructor(instructor.id)}
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
