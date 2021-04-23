import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useCallbackOne} from 'use-memo-one';
import {colors} from '../../../constants/colors';
import {IRootState} from '../../../store';
import {getCalendarMarkedDates} from '../../../utils/date-helper';
import {Container} from '../../atoms/Container';
import {Calendar} from '../../organisms/Calendar';
import {TodosList} from '../../templates/TodosList';
import styles from './styles';

export const CalendarView: React.FC = React.memo(() => {
  const {todosList} = useSelector((state: IRootState) => ({
    todosList: state.todosReducer.list,
  }));

  const [markedDates, setMarkedDates] = useState({});

  const initialCalendar = useCallbackOne(() => {
    const dates = getCalendarMarkedDates(todosList, colors.light_blue);
    setMarkedDates(dates);
  }, [todosList]);

  useEffect(() => {
    initialCalendar();
  }, [initialCalendar]);

  const renderHeader = () => {
    return <Calendar markedDates={markedDates} />;
  };

  return (
    <Container style={styles.container}>
      <TodosList
        showCheckBox={false}
        headerComponent={renderHeader}
        data={todosList}
        style={styles.container}
      />
    </Container>
  );
});
