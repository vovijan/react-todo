import { ADD_GROUP, EDIT_GROUP, DELETE_GROUP, ADD_TASK, CHANGE_TASK, DELETE_TASK } from './constants';

export const addGroup = payload => ({
  type: ADD_GROUP,
  payload
});

export const editGroup = payload => ({
  type: EDIT_GROUP,
  payload
});

export const deleteGroup = payload => ({
  type: DELETE_GROUP,
  payload
});

export const addTask = payload => ({
  type: ADD_TASK,
  payload
});

export const changeTask = payload => ({
  type: CHANGE_TASK,
  payload
});

export const deleteTask = payload => ({
  type: DELETE_TASK,
  payload
});