import {useTheme} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Calendar as RNCalendar} from 'react-native-calendars';
import {useSelector} from 'react-redux';
import {colors as appColors} from '../../../constants/colors';
import {IRootState} from '../../../store';
import styles from './styles';

export const Calendar: React.FC = React.memo(() => {
  const {colors} = useTheme();
  const {theme} = useSelector((state: IRootState) => ({
    theme: state.settingsReducer.theme,
  }));

  const calendarThemeProperties = {
    backgroundColor: colors.background,
    calendarBackground: colors.card,
    dayTextColor: colors.text,
    arrowColor: appColors.amber_dark_300,
    monthTextColor: appColors.amber_dark_300,
    indicatorColor: appColors.amber_dark_300,
    textSectionTitleColor: appColors.amber_dark_300,
    todayTextColor: appColors.amber_dark_300,
    textDayFontFamily: 'Space Mono',
    textMonthFontFamily: 'Space Mono',
    textDayHeaderFontFamily: 'Space Mono',
  };

  const [{key, calendarTheme}, setCalendarTheme] = useState({
    key: theme,
    calendarTheme: calendarThemeProperties,
  });

  // i made this workaround to get the ride of this library issue
  // https://github.com/wix/react-native-calendars/issues/322#issuecomment-362260632

  useEffect(() => {
    setCalendarTheme({key: theme, calendarTheme: calendarThemeProperties});
  }, [theme]);

  return (
    <RNCalendar
      style={styles.container}
      key={key}
      theme={calendarTheme}
      current={'2012-03-01'}
      minDate={'2012-05-10'}
      maxDate={'2012-05-30'}
    />
  );
});
