import {Todo} from '../../interfaces/Todo';

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const MARK_AS_DONE = 'MARK_AS_DONE';
export const EDIT_TODO = 'EDIT_TODO';

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

export type MarkAsDoneAction = {
  type: typeof MARK_AS_DONE;
  list: Todo[];
};

export type EditTodoAction = {
  type: typeof EDIT_TODO;
  list: Todo[];
};

export type AddTodoDispatch = (args: AddTodoAction) => AddTodoAction;
export type DeleteTodoDispatch = (args: DeleteTodoAction) => DeleteTodoAction;
export type MarkAsDoneDispatch = (args: MarkAsDoneAction) => MarkAsDoneAction;
export type EditTodoDispatch = (args: EditTodoAction) => EditTodoAction;

export type TodoActions =
  | AddTodoAction
  | DeleteTodoAction
  | MarkAsDoneAction
  | EditTodoAction;
