import {Todo} from '../interfaces/Todo';
import moment from 'moment';
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
      markedDates[moment(item.datetime).format('YYYY-MM-DD')] = {
        marked,
        dotColor: markedColor,
      };
    }
  });
  return markedDates;
};

export const getCurrentDate = () => {
  return moment().format('YYYY-MM-DD');
};
