import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddInstructor() {
  let navigate = useNavigate();

  const [instructor, setInstructor] = useState({
    instructor_name: "",
    dept_id: 0,
    instructor_email: "",
  });

  const { instructor_name, dept_id, instructor_email } = instructor;

  const onInputChange = (e) => {
    setInstructor({ ...instructor, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/instructor", instructor);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center md-4">Register instructor</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="instructor_name" className="form-label">
                Instructor Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the name of new instructor"
                name="instructor_name"
                value={instructor_name}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="dept_id" className="form-label">
                Dept Id
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the department id"
                name="dept_id"
                value={dept_id}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="instructor_email" className="form-label">
                Instructor Email
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the instructor's email"
                name="instructor_email"
                value={instructor_email}
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
