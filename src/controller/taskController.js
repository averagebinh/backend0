const Task = require('../model/task');
const { createTask, getTasks } = require('../service/taskService');

module.exports = {
  createATask: async (req, res) => {
    let result = await createTask(req.body);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },

  getAllTasks: async (req, res) => {
    let result = await getTasks(req.query);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },
};
