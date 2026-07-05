import { Link } from "react-router-dom";
import { projects } from "../data/projects";



function Home() {
  return (
    <div>
      <h1>Project Lists</h1>
      {projects.map((project) => (
        <div key={project.id}>

          <Link to={project.route}>
            {project.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;