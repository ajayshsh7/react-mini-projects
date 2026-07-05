import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { projects } from "../data/projects";


export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {projects.map((project) => (
        <Route
          key={project.id}
          path={project.route}
          element={<project.component />}
        />
      ))}
    </Routes>
  );
}