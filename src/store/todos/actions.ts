import {IRootState} from '..';
import {Todo} from '../../interfaces/Todo';
import {AddTodoDispatch, ADD_TODO} from './types';
import _ from 'lodash';

export const addTodo = (todo: Todo) => (
  dispatch: AddTodoDispatch,
  getState: () => IRootState,
) => {
  const oldTodos = getState().todosReducer.list;
  oldTodos.push(todo);
  dispatch({type: ADD_TODO, list: oldTodos});
};
