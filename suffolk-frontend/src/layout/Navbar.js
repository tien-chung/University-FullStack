import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            University DBMS
          </Link>

          <Link className="navbar-item link-info" to="/adddepartment">
            Add Department
          </Link>

          <Link className="navbar-item link-info" to="/addinstructor">
            Add Instructor
          </Link>

          <Link className="navbar-item link-info" to="/addstudent">
            Add Student
          </Link>

          <Link className="navbar-item link-info" to="/addcourse">
            Add Course
          </Link>
        </div>
      </nav>
    </div>
  );
}
