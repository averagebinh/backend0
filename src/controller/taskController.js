const Task = require('../model/task');
const { createTask } = require('../service/taskService');

module.exports = {
  createATask: async (req, res) => {
    let result = await createTask(req.body);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },
};
