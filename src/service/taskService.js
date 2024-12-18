const Task = require('../model/task.js');
const aqp = require('api-query-params');

const createTask = async (data) => {
  console.log('>>check data, ', data);

  if (data.type === 'EMPTY-TASK') {
    let results = await Task.create(data);
    return results;
  }
  return null;
};

const getTasks = async (queryString) => {
  const page = queryString.page;
  const { filter, limit, population } = aqp(queryString);
  let offset = (page - 1) * limit;
  console.log('before', filter);
  delete filter.page;

  result = await Task.find(filter)
    .populate(population)
    .skip(offset)
    .limit(limit)
    .exec();

  console.log('after', filter);
  return result;
};

module.exports = {
  createTask,
  getTasks,
};
