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

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
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

          <Route
            exact
            path="/addInstructor"
            element={<AddInstructor />}
          ></Route>

          <Route exact path="/addStudent" element={<AddStudent />}></Route>

          <Route exact path="/addCourse" element={<AddCourse />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
