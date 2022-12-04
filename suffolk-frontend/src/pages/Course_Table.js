// rfc
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Course_Table() {
  const [courses, setCourses] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    const result = await axios.get("http://localhost:8080/courses");
    setCourses(result.data);
  };

  const deleteCourse = async (id) => {
    await axios.delete(`http://localhost:8080/course/${id}`);
    loadCourses();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table class="table border shadow">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Credits</th>
              <th scope="col">Course Department</th>
              <th scope="col">Department Id</th>
              <th scope="col">Professor</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{course.title}</td>
                <td>{course.credits}</td>
                <td>{course.course_department}</td>
                <td>{course.dep_id}</td>
                <td>{course.professor}</td>
                <td>
                  <Link
                    className="btn btn-info mx-2"
                    to={`/viewCourse/${course.course_id}`}
                  >
                    {" "}
                    View
                  </Link>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/editCourse/${course.course_id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteCourse(course.course_id)}
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
