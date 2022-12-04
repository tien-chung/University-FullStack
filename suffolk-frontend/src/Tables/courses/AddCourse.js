import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddCourse() {
  let navigate = useNavigate();

  const [course, setCourse] = useState({
    title: "",
    credits: 0,
    course_department: "",
    dep_id: "",
    professor: "",
  });

  const { title, credits, course_department, dep_id, professor } = course;

  const onInputChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/course", course);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center md-4">Register course</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Course Title
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the course title"
                name="title"
                value={title}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="credits" className="form-label">
                Credits
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the number of credits for this course"
                name="credits"
                value={credits}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="course_department" className="form-label">
                Course Department
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the course department"
                name="course_department"
                value={course_department}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="dep_id" className="form-label">
                Enter the department id
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the department id"
                name="dep_id"
                value={dep_id}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="professor" className="form-label">
                Professor
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the professor that will teach this course"
                name="professor"
                value={professor}
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
