const Task = require('../model/task.js');

const createTask = async (data) => {
  console.log('>>check data, ', data);

  if (data.type === 'EMPTY-TASK') {
    let results = await Task.create(data);
    return results;
  }
  return null;
};

module.exports = {
  createTask,
};
