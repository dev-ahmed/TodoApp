import React, {useEffect, useState} from 'react';
import {DateCallbackHandler} from 'react-native-calendars';
import {useSelector} from 'react-redux';
import {useCallbackOne} from 'use-memo-one';
import {colors} from '../../../constants/colors';
import {IRootState} from '../../../store';
import {filterByDate, getCalendarMarkedDates} from '../../../utils/date-helper';
import {Container} from '../../atoms/Container';
import {Calendar} from '../../organisms/Calendar';
import {TodosList} from '../../templates/TodosList';
import styles from './styles';

export const CalendarView: React.FC = React.memo(() => {
  const {todosList} = useSelector((state: IRootState) => ({
    todosList: state.todosReducer.list,
  }));

  const [todos, setTodos] = useState(todosList);
  const [markedDates, setMarkedDates] = useState({});

  const initialCalendar = useCallbackOne(() => {
    const selectedTodos = filterByDate(todosList, Date.now());
    setTodos(selectedTodos);
    const dates = getCalendarMarkedDates(todosList, colors.light_blue);
    setMarkedDates(dates);
  }, [todosList]);

  useEffect(() => {
    initialCalendar();
  }, [initialCalendar]);

  const onDayPress: DateCallbackHandler = date => {
    const selectedTodos = filterByDate(todosList, date.timestamp);
    setTodos(selectedTodos);
  };

  const renderHeader = () => {
    return <Calendar onDayPress={onDayPress} markedDates={markedDates} />;
  };

  return (
    <Container style={styles.container}>
      <TodosList
        emptyMessage="There are no Todos matches this date"
        showCheckBox={false}
        headerComponent={renderHeader}
        data={todos}
        style={styles.container}
      />
    </Container>
  );
});
