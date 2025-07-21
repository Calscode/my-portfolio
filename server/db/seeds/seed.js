const db = require('../connection')
const format = require("pg-format")
const projectData = require("../data/dev-data/projectdata")

function insertProject(project) {
  const {
    name,
    description,
    tech_stack,
    url = null,
    frontend_url = null,
    backend_url = null,
  } = project;

  return db.query(
    `INSERT INTO projects (name, description, tech_stack, url, frontend_url, backend_url)
     VALUES ($1, $2, $3, $4, $5, $6);`,
    [name, description, tech_stack, url, frontend_url, backend_url]
  );
}

function seed() {

  return db
    .query("DELETE FROM projects;")
    .then(() => {
      let promiseChain = Promise.resolve();

      projectData.forEach((project) => {
        promiseChain = promiseChain.then(() => insertProject(project));
      });

      return promiseChain;
    })
    .then(() => {
      console.log("🌱 Seeding complete!");
      process.exit(0);
    })
    .catch((err) => {
      console.error("❌ Seeding failed:", err);
      process.exit(1);
    });
}
seed();
