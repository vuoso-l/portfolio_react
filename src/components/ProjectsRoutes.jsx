import { Routes, Route } from "react-router-dom";

import ApiProjects from "../pages/ApiProjects";
import ReactProjects from "../pages/ReactProjects";
import StaticProjects from "../pages/StaticProjects";
import VanillaJsProjects from "../pages/VanillaJsProjects";
import Projects from "../pages/Projects";
import Error404 from "../pages/Error404";
import { ThemeProvider } from "../context/ThemeContext";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Resume from "../pages/Resume";

const ProjectsRoutes = () => {
  return (
    <div>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/api-projects" element={<ApiProjects />} />
          <Route path="/react-projects" element={<ReactProjects />} />
          <Route path="/static-projects" element={<StaticProjects />} />
          <Route path="/dinamic-projects" element={<VanillaJsProjects />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
};

export default ProjectsRoutes;
