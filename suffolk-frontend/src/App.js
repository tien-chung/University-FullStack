import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddDepartment from "./Tables/departments/AddDepartment";
import EditDepartment from "./Tables/departments/EditDepartment";
import ViewDepartment from "./Tables/departments/ViewDepartment";
import AddInstructor from "./Tables/instructors/AddInstructor";
import AddStudent from "./Tables/students/AddStudent";
import AddCourse from "./Tables/courses/AddCourse";
import EditInstructor from "./Tables/instructors/EditInstructor";
import EditCourse from "./Tables/courses/EditCourse";
import EditStudent from "./Tables/students/EditStudent";
import ViewCourse from "./Tables/courses/ViewCourse";
import ViewInstructor from "./Tables/instructors/ViewInstructor";
import ViewStudent from "./Tables/students/ViewStudent";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>

          {/* DEPARTMENT */}
          <Route
            exact
            path="/addDepartment"
            element={<AddDepartment />}
          ></Route>
          <Route
            exact
            path="/editDepartment/:id"
            element={<EditDepartment />}
          ></Route>
          <Route
            exact
            path="/viewDepartment/:id"
            element={<ViewDepartment />}
          ></Route>

          {/* INSTRUCTOR */}
          <Route
            exact
            path="/addInstructor"
            element={<AddInstructor />}
          ></Route>
          <Route
            exact
            path="/viewInstructor/:id"
            element={<ViewInstructor />}
          ></Route>

          <Route
            exact
            path="/editInstructor/:id"
            element={<EditInstructor />}
          ></Route>

          {/* STUDENT */}

          <Route exact path="/addStudent" element={<AddStudent />}></Route>

          <Route
            exact
            path="/editStudent/:id"
            element={<EditStudent />}
          ></Route>

          <Route
            exact
            path="/viewStudent/:id"
            element={<ViewStudent />}
          ></Route>

          {/* COURSE */}
          <Route exact path="/addCourse" element={<AddCourse />}></Route>
          <Route exact path="/editCourse/:id" element={<EditCourse />}></Route>
          <Route exact path="/viewCourse/:id" element={<ViewCourse />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
