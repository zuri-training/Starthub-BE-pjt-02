const Project = require("../models/Project");

exports.addProject = async (req, res) => {
  const newProject = await Project.create({
    //   ...req.body
    projectName: req.body.projectName,
    projectInfo: req.body.projectInfo,
    projectImage: req.body.projectImage,
    projectUrl: req.body.projectUrl,
  });

  try {
    newProject.save();
    res.status(200).json({
      message: "successfully created a new project",
      data: newProject,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProjects = async (req, res) => {
  const projects = await Project.find({});

  try {
    res
      .status(200)
      .json({ message: "successfully fetched all projects", data: projects });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProject = async (req, res) => {
  const project = await Project.findById({ _id: req.params.id });

  try {
    res.status(200).json({
      message: "successfully fetched the requested project",
      data: project,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateProject = async (req, res) => {
  const updatedProject = await Project.findByIdAndUpdate(req.params.id, {
    projectName: req.body.projectName,
    projectInfo: req.body.projectInfo,
    projectImage: req.body.projectImage,
    projectUrl: req.body.projectUrl,
  });

  try {
    res
      .status(200)
      .json({ message: "project updated successfully", data: updatedProject });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteProject = async (req, res) => {
  const deletedProject = await Project.findByIdAndDelete(req.params.id);

  try {
    res.status(200).json({ message: "project deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
