// rfc
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Department_Table() {
  const [departments, setDepartments] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadDepartments();
  }, []);

  const loadDepartments = async () => {
    const result = await axios.get("http://localhost:8080/departments");
    setDepartments(result.data);
  };

  const deleteDepartment = async (id) => {
    await axios.delete(`http://localhost:8080/department/${id}`);
    loadDepartments();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table class="table border shadow">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Department Name</th>
              <th scope="col">Location</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {departments.map((department, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{department.department_name}</td>
                <td>{department.location}</td>
                <td>
                  <Link
                    className="btn btn-info mx-2"
                    to={`/viewDepartment/${department.id}`}
                  >
                    {" "}
                    View
                  </Link>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/editDepartment/${department.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteDepartment(department.id)}
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
