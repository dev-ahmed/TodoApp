import {Reducer} from 'redux';
import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  MARK_AS_DONE,
  TodoActions,
  TodosState,
} from './types';
const initialState = {
  list: [],
};

export const todosReducer: Reducer<TodosState, TodoActions> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        list: action.list,
      };
    case DELETE_TODO:
      return {
        ...state,
        list: action.list,
      };
    case MARK_AS_DONE:
      return {
        ...state,
        list: action.list,
      };
    case EDIT_TODO:
      return {
        ...state,
        list: action.list,
      };
    default:
      return state;
  }
};
