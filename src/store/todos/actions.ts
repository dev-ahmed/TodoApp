import {IRootState} from '..';
import {Todo} from '../../interfaces/Todo';
import {sortByDate} from '../../utils/todos-helper';
import {
  AddTodoDispatch,
  ADD_TODO,
  DeleteTodoDispatch,
  DELETE_TODO,
  EditTodoDispatch,
  EDIT_TODO,
  MarkAsDoneDispatch,
  MARK_AS_DONE,
} from './types';

export const addTodo = (todo: Todo) => (
  dispatch: AddTodoDispatch,
  getState: () => IRootState,
) => {
  const oldTodos = getState().todosReducer.list;
  const newTodos = [todo, ...oldTodos];
  dispatch({type: ADD_TODO, list: newTodos});
};

export const editTodo = (todo: Todo) => (
  dispatch: EditTodoDispatch,
  getState: () => IRootState,
) => {
  const todos = getState().todosReducer.list;
  const newTodos = todos.map(item => {
    if (item.id === todo.id) {
      return {...todo};
    }
    return item;
  });
  const sortedTodos = sortByDate(newTodos);
  dispatch({type: EDIT_TODO, list: sortedTodos});
};

export const deleteTodo = (id: string) => (
  dispatch: DeleteTodoDispatch,
  getState: () => IRootState,
) => {
  const todos = getState().todosReducer.list;
  const newTodos = todos.filter(item => item.id !== id);
  dispatch({type: DELETE_TODO, list: newTodos});
};

export const markAsDone = (id: string) => (
  dispatch: MarkAsDoneDispatch,
  getState: () => IRootState,
) => {
  const todos = getState().todosReducer.list;
  const newTodos = todos.map(item => {
    if (item.id === id) {
      return {...item, isDone: !item.isDone};
    }
    return item;
  });

  dispatch({type: MARK_AS_DONE, list: newTodos});
};
