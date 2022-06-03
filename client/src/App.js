import "./App.css";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Error from "./pages/Error";
import Home from "./pages/Home";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>contact list</h1>
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/add"}>
          <li>Add</li>
        </Link>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/add" element={<Add />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
