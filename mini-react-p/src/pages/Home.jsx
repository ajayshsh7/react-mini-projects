import { Link } from "react-router-dom";

const projects = [
  {
    name: "Simple Counter",
    route: "/counter",
  },
  {
    name: "Todo App",
    route: "/todo",
  },
  {
    name: "Calculator",
    route: "/calculator",
  },
];

export default function Home() {
  return (
    <div>
      <h1>Project Lists</h1>
      {projects.map((project) => (
    <div key={project.route}>
      <Link to={project.route}>{project.name}</Link>
    </div>
  ))}
    </div>
  );
}