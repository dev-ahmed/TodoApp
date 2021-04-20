import {Todo} from '../../interfaces/Todo';

export const ADD_TODO = 'ADD_TODO';

export type TodosState = {
  list: Todo[];
};

export type AddTodoAction = {
  type: typeof ADD_TODO;
  list: Todo[];
};

export type AddTodoDispatch = (args: AddTodoAction) => AddTodoAction;

export type TodoActions = AddTodoAction;
