import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

export default function ViewStudent() {
  const [student, setStudent] = useState({
    advisor_id: 0,
    student_name: "",
    student_email: "",
    total_credit: 0,
    major: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadStudent();
  }, []);

  const loadStudent = async () => {
    const result = await axios.get(`http://localhost:8080/student/${id}`);
    setStudent(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center md-4">Student Details</h2>

          <div className="card">
            <div className="card-header">
              Details of student id: {student.student_id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Advisor Id:</b>
                  {student.advisor_id}
                </li>
                <li className="list-group-item">
                  <b>Student Name:</b>
                  {student.student_name}
                </li>
                <li className="list-group-item">
                  <b>Student Email:</b>
                  {student.student_email}
                </li>
                <li className="list-group-item">
                  <b>Total Credits:</b>
                  {student.total_credit}
                </li>
                <li className="list-group-item">
                  <b>Major:</b>
                  {student.major}
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
