import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewInstructor() {
  const [instructor, setInstructor] = useState({
    instructor_name: "",
    dept_id: 0,
    instructor_email: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadInstructor();
  }, []);

  const loadInstructor = async () => {
    const result = await axios.get(`http://localhost:8080/instructor/${id}`);
    setInstructor(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center md-4">Instructor Details</h2>

          <div className="card">
            <div className="card-header">
              Details of Instructor id: {instructor.instructor_id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Instructor Name:</b>
                  {instructor.instructor_name}
                </li>
                <li className="list-group-item">
                  <b>Department Id:</b>
                  {instructor.dept_id}
                </li>
                <li className="list-group-item">
                  <b>Instructor Email:</b>
                  {instructor.instructor_email}
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
