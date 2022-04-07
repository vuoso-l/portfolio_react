import React from "react";
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
import Formation from "../pages/Formation";

const ProjectsRoutes = () => {
  return (
    <div>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/formacion" element={<Formation />} />
          <Route path="/proyectos-api" element={<ApiProjects />} />
          <Route path="/proyectos-react" element={<ReactProjects />} />
          <Route path="/proyectos-estaticos" element={<StaticProjects />} />
          <Route path="/proyectos-dinamicos" element={<VanillaJsProjects />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
};

export default ProjectsRoutes;
