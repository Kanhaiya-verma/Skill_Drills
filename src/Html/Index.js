import "./index.css";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className=" banner card">
      <nav className=" navigation">
        <h1 style={{ color: "rgba(197, 11, 219, 0.8)" }}>Skill-Drills</h1>
        <ul className="nav_child">
          <li>
            <Link to={"#"}>Home</Link>
          </li>
          <li>
            <Link to={"#"}>Courses</Link>
          </li>
          <li>
            <Link to={"#"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"#"}>Projects</Link>
          </li>
          <li>
            <Link to={"#"}>Video Section</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Index;
