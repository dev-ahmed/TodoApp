import {useTheme} from '@react-navigation/native';
import React, {ReactChild} from 'react';
import {View, ViewStyle} from 'react-native';
import styles from './styles';

interface Props {
  children: ReactChild;
  style?: ViewStyle;
}

export const Container: React.FC<Props> = React.memo(({children, style}) => {
  const {colors} = useTheme();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
        },
        style,
      ]}>
      {children}
    </View>
  );
});
