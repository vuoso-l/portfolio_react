import React from "react";
import { Routes, Route } from "react-router-dom";
import ApiProjects from "../pages/ApiProjects";
import ReactProjects from "../pages/ReactProjects";
import StaticProjects from "../pages/StaticProjects";
import VanillaJsProjects from "../pages/VanillaJsProjects";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import { ThemeProvider } from "../context/ThemeContext";

const ProjectsRoutes = () => {
  return (
    <div>
      <ThemeProvider>
        <Routes>
          <Route path="/portfolio_react/" element={<Home />} />
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
