import {Todo} from '../../interfaces/Todo';

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export type TodosState = {
  list: Todo[];
};

export type AddTodoAction = {
  type: typeof ADD_TODO;
  list: Todo[];
};

export type DeleteTodoAction = {
  type: typeof DELETE_TODO;
  list: Todo[];
};

export type AddTodoDispatch = (args: AddTodoAction) => AddTodoAction;
export type DeleteTodoDispatch = (args: DeleteTodoAction) => DeleteTodoAction;

export type TodoActions = AddTodoAction | DeleteTodoAction;
