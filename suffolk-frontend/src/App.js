import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddDepartment from "./departments/AddDepartment";
import EditDepartment from "./departments/EditDepartment";
import ViewDepartment from "./departments/ViewDepartment";

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
