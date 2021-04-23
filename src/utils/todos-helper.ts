import {Todo} from '../interfaces/Todo';
import _ from 'lodash';

export const searchTodos = (todos: Todo[], searchKey: string) => {
  if (!_.isEmpty(searchKey)) {
    return todos.filter(item => {
      return item.title.includes(searchKey);
    });
  }

  return todos;
};
