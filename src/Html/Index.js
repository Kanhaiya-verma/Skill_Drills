import "./index.css";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className=" banner card">
      <nav className=" navigation">
        <h1 style={{ color: "rgba(197, 11, 219, 0.8)" }}>Skill-Drills</h1>
        <ul className="nav_child">
          <li>
            <Link to={"#"}>
              <b>Home</b>
            </Link>
          </li>
          <li>
            <Link to={"#"}>
              <b>Courses</b>
            </Link>
          </li>
          <li>
            <Link to={"#"}>
              <b>Contact Us</b>
            </Link>
          </li>
          <li>
            <Link to={"#"}>
              <b>Projects</b>
            </Link>
          </li>
          <li>
            <Link to={"#"}>
              <b>Video Section</b>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Index;
