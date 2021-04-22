import {useTheme} from '@react-navigation/native';
import React from 'react';
import RNDatePicker, {DatePickerProps} from 'react-native-date-picker';

export const DatePicker: React.FC<DatePickerProps> = React.memo(
  ({date, onDateChange}) => {
    const {colors} = useTheme();
    return (
      <RNDatePicker
        textColor={colors.text}
        date={date}
        onDateChange={onDateChange}
      />
    );
  },
);
