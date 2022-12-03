// rfc
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Department_Table from "./Department_Table";
import Instructor_Table from "./Instructor_Table";
import Student_Table from "./Student_Table";
import Course_Table from "./Course_Table";

export default function Home() {
  return (
    <>
      <Department_Table />
      <Instructor_Table />
      <Student_Table />
      <Course_Table />
    </>
  );
}
