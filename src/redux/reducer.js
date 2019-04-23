import { 
  ADD_GROUP, 
  EDIT_GROUP, 
  DELETE_GROUP, 
  ADD_TASK, 
  CHANGE_TASK, 
  DELETE_TASK, 
  RENAME_TASK 
} from './constants';

const initialState = {
  data: [
    {
      id: 1,
      name: 'Work',
      tasks: [
        {
          id: 2,
          name: 'Start project',
          completed: false
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
        data: [ 
          ...state.data.map(group => {
            if (group.id === action.payload.id) {
              group.name = action.payload.name;
            }
            return group;
          })
        ]
      };
    case DELETE_GROUP:
      return {
        ...state,
        data: state.data.filter(group => 
          group.id !== action.payload
        )
      }
    case  ADD_TASK:
      return {
        ...state,
        data: state.data.map(group => {
          if (group.id === action.payload.groupId) {
            return {
              ...group,
              tasks: [
                ...group.tasks,
                {
                  id: Date.now(),
                  name: action.payload.label,
                  completed: false
                }
              ]
            }
          }
          return group;
        })
      }
    case CHANGE_TASK:
      return {
        ...state,
        data: state.data.map(group => {
          if (group.id === action.payload.groupId) {
            return {
              ...group, 
              tasks: group.tasks.map(task => {
                if (task.id === action.payload.id) {
                  task.completed = !task.completed;
                }
                return task;
              })
            }
          }
          return group;
        })
      }
    case DELETE_TASK:
      return {
        ...state,
        data: state.data.map(group => {
          if (group.id === action.payload.groupId) {
            return {
              ...group,
              tasks: group.tasks.filter(task => task.id !== action.payload.id)
            }
          }
          return group;
        })
      }
    case RENAME_TASK:
      return {
        ...state,
        data: state.data.map(group => {
          if (group.name === action.payload.groupName) {
            return {
              ...group,
              tasks: group.tasks.map(task => {
                if (task.id === action.payload.id) {
                  task.name = action.payload.name;
                }
                return task;
              })
            }
          }
          return group;
        })
      }
    default:
      return state;
  }
};