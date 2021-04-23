import React from 'react';
import {Container} from '../../atoms/Container';
import {Calendar} from '../../organisms/Calendar';
import styles from './styles';

export const CalendarView: React.FC = React.memo(() => {
  return (
    <Container style={styles.container}>
      <Calendar />
    </Container>
  );
});
