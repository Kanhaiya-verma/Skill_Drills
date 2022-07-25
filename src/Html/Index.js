import "./index.css";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className=" banner card">
      <nav className=" navigation">
        <Link style={{textDecoration:"none"}} to={"/Home"}><h1 style={{ color: "rgba(197, 11, 219, 0.8)",width:"250px", padding:"5px"}}>Skill-Drills</h1></Link>
        <ul className="nav_child">
          <li>  
            <Link to={"/Home"}>
              <b>Home</b>
            </Link>
          </li>
          <li>
            <Link to={"/Courses"}>
              <b>Courses</b>
            </Link>
          </li>
         
          <li>
            <Link to={"/Projects"}>
              <b>Projects</b>
            </Link>
          </li>
          <li>
            <Link to={"/VideosLecture"}>
              <b>Video Section</b>
            </Link>
          </li>
          <li>
            <Link to={"/ContactUs"}>
              <b>Contact Us</b>
            </Link>
          </li>
          <li>
            <Link to={"/Login"}>
              <b>Become Member</b>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Index;
