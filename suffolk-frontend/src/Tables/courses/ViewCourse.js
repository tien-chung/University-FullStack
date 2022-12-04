import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

export default function ViewCourse() {
  const [course, setCourse] = useState({
    title: "",
    credits: 0,
    course_department: "",
    dep_id: "",
    professor: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadCourse();
  }, []);

  const loadCourse = async () => {
    const result = await axios.get(`http://localhost:8080/course/${id}`);
    setCourse(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center md-4">Course Details</h2>

          <div className="card">
            <div className="card-header">
              Details of course id: {course.course_id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Course Title:</b>
                  {course.title}
                </li>
                <li className="list-group-item">
                  <b>Course Credits:</b>
                  {course.credits}
                </li>
                <li className="list-group-item">
                  <b>Course department:</b>
                  {course.course_department}
                </li>
                <li className="list-group-item">
                  <b>Department Id:</b>
                  {course.dep_id}
                </li>
                <li className="list-group-item">
                  <b>Professor:</b>
                  {course.professor}
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
