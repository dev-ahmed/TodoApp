import {IRootState} from '..';
import {Todo} from '../../interfaces/Todo';
import {
  AddTodoDispatch,
  ADD_TODO,
  DeleteTodoDispatch,
  DELETE_TODO,
} from './types';
import _ from 'lodash';

export const addTodo = (todo: Todo) => (
  dispatch: AddTodoDispatch,
  getState: () => IRootState,
) => {
  const oldTodos = getState().todosReducer.list;
  oldTodos.push(todo);
  dispatch({type: ADD_TODO, list: oldTodos});
};

export const deleteTodo = (id: string) => (
  dispatch: DeleteTodoDispatch,
  getState: () => IRootState,
) => {
  const todos = getState().todosReducer.list;
  const index = todos.findIndex(item => item.id === id);
  todos.splice(index, 1);
  dispatch({type: DELETE_TODO, list: todos});
};
