const express = require('express');
const router = express.Router();
const {
  addProject,
  getProjects,
  getProject,
  updateProject,
  deleteProject,
} = require('../controllers/projectController');
const protect = require('../middleware/authMiddleware');

router.post('/projects', protect, addProject);

router.get('/projects', getProjects);

router.get('/projects/:id', getProject);

router.put('/projects/:id', protect, updateProject);

router.delete('/projects/:id', protect, deleteProject);

module.exports = router;
