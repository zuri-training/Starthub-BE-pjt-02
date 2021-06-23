// const asyncHandler = require('../middleware/asyncHandler');
const Project = require('../models/Project');

exports.addProject = async (req, res) => {
  let userId = req.user._id;
  const newProject = await Project.create({
    //   ...req.body
    projectName: req.body.projectName,
    projectInfo: req.body.projectInfo,
    projectImage: req.body.projectImage,
    projectUrl: req.body.projectUrl,
    projectOwner: userId,
  });

  try {
    newProject.save();
    res.status(200).json({
      message: 'successfully created a new project',
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
      .json({ message: 'successfully fetched all projects', data: projects });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProject = async (req, res) => {
  const project = await Project.findById(req.params.id);

  try {
    if (!project) {
      res.status(404).json({
        message: 'project with that id not found',
      });
    } else {
      res.status(200).json({
        message: 'successfully fetched the requested project',
        data: project,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateProject = async (req, res) => {
  const updatedProject = await Project.findByIdAndUpdate(
    req.params.id,
    {
      // ...req.body,
      projectName: req.body.projectName,
      projectInfo: req.body.projectInfo,
      projectImage: req.body.projectImage,
      projectUrl: req.body.projectUrl,
    },
    { new: true }
  );

  try {
    if (!updatedProject) {
      res.status(404).json({ message: 'project with that id not found' });
    } else {
      updatedProject.save();
      res.status(200).json({
        message: 'project updated successfully',
        data: updatedProject,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteProject = async (req, res) => {
  const deletedProject = await Project.findByIdAndDelete(req.params.id);

  try {
    if (!deletedProject) {
      res.status(404).json({ message: 'project with id not found' });
    } else {
      res.status(200).json({ message: 'project deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 *  async handler helps to prevent unwanted errors that might brake the server.
 * (e.g) exports.addProject = asyncHandler(async (req, res, next) => {
  //  your code here
})  // do this to all your routes
*/
