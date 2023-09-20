import { Routes, Route } from "react-router-dom";

// import main scss file
import "./styles/main.scss";
import "./styles/library/classes.scss";

// import layouts:
import Layout from "./layouts/layout";

// import pages
import Dashboard from "./pages/dashboard";
import Profile from "./pages/profile";
import Settings from "./pages/settings";
import Projects from "./pages/projects";
import Files from "./pages/files";
import Friends from "./pages/friends";
import Courses from "./pages/courses";
import {CourseInfo, Description, Unites, Tasks} from "./pages/course-info";
import Plans from "./pages/plans";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />}></Route>
        <Route path="profile" element={<Profile />}></Route>
        <Route path="settings" element={<Settings />}></Route>
        <Route path="projects" element={<Projects />}></Route>
        <Route path="files" element={<Files />}></Route>
        <Route path="friends" element={<Friends />}></Route>
        <Route path="courses" element={<Courses />}></Route>
        <Route path="courses/:course" element={<CourseInfo />}>
          <Route index element={<Description/>}></Route>
          <Route path="unites" element={<Unites/>}></Route>
          <Route path="tasks" element={<Tasks/>}></Route>
        </Route>
        <Route path="plans" element={<Plans />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
