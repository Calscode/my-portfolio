const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./db/connection");

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/api/projects", (req, res, next) => {
  db.query("SELECT * FROM projects;")
    .then((result) => {
      res.status(200).send({ projects: result.rows });
    })
    .catch(next);
});

module.exports = app;