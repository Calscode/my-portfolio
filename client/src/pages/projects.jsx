import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../Components/footer";
import Layout from "../Components/layout";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("https://my-portfolio-pgfp.onrender.com/api.projects")
      .then((res) => {
        console.log("✅ Received from backend:", res.data);
        setProjects(res.data.projects);
      })
      .catch((err) => {
        console.error("❌ Failed to fetch:", err);
        setError("Could not fetch projects.");
      });
  }, []);

  return (
    <Layout>
    <div className="projects-container">
      <h1>Projects</h1>

      {error && <p className="projects-error">{error}</p>}

      {projects.length === 0 && !error && <p>No projects to show.</p>}

      <ul>
        {projects.map((proj) => (
          <li key={proj.name} className="project-item">
            <h3>{proj.name}</h3>
            <p>{proj.description}</p>
            {proj.url && (
              <a href={proj.url} target="_blank" rel="noreferrer">
                View Live
              </a>
            )}
          </li>
        ))}
      </ul>
      <Footer/>
    </div>
    </Layout>
  );
}