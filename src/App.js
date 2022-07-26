import "./App.css";
import Index from "./Html/Index";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Authentication/Login";
import Course from "./Course/Course";
import Projects from "./Projects/Projects";
import Videos from "./VideosLecture/Videos";
import ContactUs from "./ContactUs/ContactUs";
import SignUp from "./Authentication/SignUp";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Courses" element={<Course />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/VideosLecture" element={<Videos />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
