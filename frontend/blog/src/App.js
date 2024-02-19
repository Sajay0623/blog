import "./App.css";
import { CreateBlog } from "./components/CreateBlog";
import Dashboard from "./components/Dashboard";
import EditBlog from "./components/EditBlog";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import Register from "./components/Register";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              {" "}
              <Dashboard />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/blog/:id" element={<EditBlog />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/createblog" element={<CreateBlog />}></Route>
      </Routes>
    </>
  );
}

export default App;
