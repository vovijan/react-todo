import { ADD_GROUP, EDIT_GROUP } from './constants';

const initialState = {
  data: [
    {
      id: 1,
      name: 'Work',
      tasks: [
        {
          id: 2,
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
        data: state.data.map(grroup => {
          if (grroup.id === action.payload.id) {
            grroup.name = action.payload.name;
          }
          return grroup;
        })
      };
    default:
      return state;
  }
};