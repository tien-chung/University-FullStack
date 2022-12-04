import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddStudent() {
  let navigate = useNavigate();

  const [student, setStudent] = useState({
    advisor_id: 0,
    student_name: "",
    student_email: "",
    total_credit: 0,
    major: "",
  });

  const { advisor_id, student_name, student_email, total_credit, major } =
    student;

  const onInputChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/student", student);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center md-4">Register student</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="advisor_id" className="form-label">
                Advisor Id
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the id of advisor"
                name="advisor_id"
                value={advisor_id}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="student_name" className="form-label">
                Student Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the name of new student"
                name="student_name"
                value={student_name}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="student_email" className="form-label">
                Student Email
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the student's email"
                name="student_email"
                value={student_email}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="total_credit" className="form-label">
                Total Credits
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the department id"
                name="total_credit"
                value={total_credit}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="major" className="form-label">
                Major
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the department id"
                name="major"
                value={major}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>

            <Link type="submit" className="btn btn-outline-danger m-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
