const User = require('../models/User');
const Project = require('../models/Project');
const asyncHandler = require('../middleware/asyncHandler');

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  try {
    const user = await User.findById(req.user._id, { password: 0, __v: 0 });

    // const user = await User.findOne({ _id: userId },{ password: 0, __v: 0 });

    if (!user) res.status(404).json({ message: 'User not found' });

    return res
      .status(200)
      .json({ message: 'successfully fetched user data', data: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const getUserProjects = asyncHandler(async (req, res) => {
  try {
    const projects = await Project.find({ projectOwner: req.user._id });
    return res
      .status(200)
      .json({ message: 'successfully fetched user projects', data: projects });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = { getUserProfile, getUserProjects };
