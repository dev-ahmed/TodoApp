import {Todo} from '../interfaces/Todo';
import moment from 'moment';

const FORMAT = 'YYYY-MM-DD';

export const getDate = () => {
  return Date.now();
};

export const getCalendarMarkedDates = (
  todosList: Todo[],
  markedColor: string,
) => {
  const markedDates: any = {};
  todosList.forEach(item => {
    let marked = true;
    if (!item.isDone) {
      markedDates[moment(item.datetime).format(FORMAT)] = {
        marked,
        dotColor: markedColor,
      };
    }
  });
  return markedDates;
};

export const getCurrentDate = () => {
  return moment().format(FORMAT);
};

export const filterByDate = (todos: Todo[], timestamp: number) => {
  return todos.filter(item => {
    return (
      moment(item.datetime).format(FORMAT) === moment(timestamp).format(FORMAT)
    );
  });
};
