import React from "react";
import { Routes, Route } from "react-router-dom";
import ApiProjects from "../pages/ApiProjects";
import ReactProjects from "../pages/ReactProjects";
import StaticProjects from "../pages/StaticProjects";
import VanillaJsProjects from "../pages/VanillaJsProjects";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";

const ProjectsRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/portfolio_react/" element={<Home />} />
        <Route path="/portfolio_react/proyectos-api" element={<ApiProjects />} />
        <Route path="/portfolio_react/proyectos-react" element={<ReactProjects />} />
        <Route path="/portfolio_react/proyectos-estaticos" element={<StaticProjects />} />
        <Route path="/portfolio_react/proyectos-dinamicos" element={<VanillaJsProjects />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
};

export default ProjectsRoutes;