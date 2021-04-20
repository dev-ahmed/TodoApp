import {Reducer} from 'redux';
import {ADD_TODO, TodoActions, TodosState} from './types';
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
    default:
      return state;
  }
};
