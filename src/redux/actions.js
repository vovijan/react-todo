import { ADD_GROUP, EDIT_GROUP, DELETE_GROUP } from './constants';

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