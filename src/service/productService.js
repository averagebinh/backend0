const Project = require('../model/project.js');
const aqp = require('api-query-params');

const createProject = async (data) => {
  console.log('>>>check data', data);
  if (data.type === 'EMPTY-PROJECT') {
    let results = await Project.create(data);
    return results;
  }

  if (data.type === 'ADD-USERS') {
    console.log('>> check data', data);

    let myProject = await Project.findById(data.projectId).exec();
    console.log('myProject, ', myProject);

    for (let i = 0; i < data.usersArr.length; i++) {
      myProject.usersInfor.push(data.usersArr[i]);
    }
    let newResult = await myProject.save();
    return newResult;
  }

  if (data.type === 'REMOVE-USERS') {
    console.log('>> check data', data);
    // Use findByIdAndUpdate with $pull to remove users
    const updatedProject = await Project.findByIdAndUpdate(
      data.projectId,
      {
        $pull: { usersInfor: { $in: data.usersArr } },
      },
      { new: true } // Return the updated document
    ).exec();
    console.log('>>check updatedProject', updatedProject);
    return updatedProject;
  }

  if (data.type === 'ADD-TASKS') {
    console.log('>> check data', data);

    let myProject = await Project.findById(data.projectId).exec();
    console.log('myProject, ', myProject);

    for (let i = 0; i < data.taskArr.length; i++) {
      myProject.tasks.push(data.taskArr[i]);
    }
    let newResult = await myProject.save();
    return newResult;
  }

  return null;
};

const getProject = async (queryString) => {
  const page = queryString.page;
  const { filter, limit, population } = aqp(queryString);
  let offset = (page - 1) * limit;
  console.log('before', filter);
  delete filter.page;

  result = await Project.find(filter)
    .populate(population)
    .skip(offset)
    .limit(limit)
    .exec();

  console.log('after', filter);
  return result;
};

const deleteProject = async (id) => {
  let result = await Project.deleteOne({ _id: id });
  return result;
};

const updateProject = async (data) => {
  console.log('check projectid', data);
  const { id, name, startDate, endDate, description } = data;

  let updatedResult = await Project.updateOne(
    { _id: id }, // Filter: Find the user by ID
    { $set: { name, endDate, description } } // Update: Set the fields to new values
  );
  return updatedResult;
};

module.exports = {
  createProject,
  getProject,
  deleteProject,
  updateProject,
};
