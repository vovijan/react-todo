import { ADD_GROUP, EDIT_GROUP, DELETE_GROUP } from './constants';

const initialState = {
  data: [
    {
      id: 1,
      name: 'Work',
      tasks: [
        {
          id: 2,
          name: 'Start project',
          completed: true
        },
        {
          id: 3,
          name: 'Finish project',
          completed: false
        }
      ]
    },
    {
      id: 2,
      name: 'Project',
      tasks: [
        {
          id: 3,
          name: 'Finish project',
          completed: false
        }
      ]
    }
  ]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GROUP:
      return {
        ...state,
        data: [
          ...state.data,
          {
            id: Date.now(),
            name: action.payload,
            tasks: []
          }
        ]
      };
    case EDIT_GROUP:
      return {
        ...state,
        data: state.data.map(group => {
          if (group.id === action.payload.id) {
            group.name = action.payload.name;
          }
          return group;
        })
      };
    case DELETE_GROUP:
      return {
        ...state,
        data: state.data.filter(group => group.id !== action.payload)
      }
    default:
      return state;
  }
};