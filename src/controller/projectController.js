const connection = require('../config/database');
const Project = require('../model/project');
const {
  createProject,
  getProject,
  deleteProject,
  updateProject,
} = require('../service/productService');

module.exports = {
  postCreateProject: async (req, res) => {
    let result = await createProject(req.body);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },

  getAllProject: async (req, res) => {
    let result = await getProject(req.query);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },
  deleteAProject: async (req, res) => {
    let result = await deleteProject(req.body.id);

    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },
  updateAProject: async (req, res) => {
    let result = await updateProject(req.body);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },
};
