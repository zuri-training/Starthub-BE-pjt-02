const express = require("express");
const router = express.Router();
const {
  addProject,
  getProjects,
  getProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");

router.post("/projects", addProject);

router.get("/projects", getProjects);

router.get("/projects/:id", getProject);

router.put("/projects/:id", updateProject);

router.delete("/projects/:id", deleteProject);

module.exports = router;