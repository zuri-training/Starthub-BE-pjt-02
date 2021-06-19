const mongoose = require("mongoose");
// const { Schema } = mongoose;
const Schema = mongoose.Schema;

const ProjectSchema = new Schema(
  {
    projectName: {
      type: String,
      required: true,
    },
    projectInfo: {
      type: String,
      required: true,
    },
    projectImage: {
      type: String,
      required: true,
    },
    projectUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Project = mongoose.model('Project', ProjectSchema);
