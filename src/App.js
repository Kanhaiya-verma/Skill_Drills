import "./App.css";
import Index from "./Html/Index";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Authrntication/Login";
import Course from "./Course/Course"
import Projects from "./Projects/Projects";
import Videos from "./VideosLecture/Videos";
import ContactUs from "./ContactUs/ContactUs";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Courses" element={<Course />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/VideosLecture" element={<Videos />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
