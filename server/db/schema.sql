DROP TABLE IF EXISTS projects; 

CREATE TABLE projects (
    project_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    tech_stack  TEXT NOT NULL,
    url TEXT,
    frontend_url TEXT,
    backend_url TEXT
);