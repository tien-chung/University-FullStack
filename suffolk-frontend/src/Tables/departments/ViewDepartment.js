import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewDepartment() {
  const [department, setDepartment] = useState({
    department_name: "",
    location: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadDepartment();
  }, []);

  const loadDepartment = async () => {
    const result = await axios.get(`http://localhost:8080/department/${id}`);
    setDepartment(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center md-4">Department Details</h2>

          <div className="card">
            <div className="card-header">
              Details of department id: {department.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Department Name:</b>
                  {department.department_name}
                </li>
                <li className="list-group-item">
                  <b>Location:</b>
                  {department.location}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
