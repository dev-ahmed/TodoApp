import {useTheme} from '@react-navigation/native';
import React from 'react';
import {TextStyle, Text as RNText} from 'react-native';
import styles from './styles';
interface Props {
  children: Element;
  style?: TextStyle[] | TextStyle;
}

export const Text: React.FC<Props> = React.memo(({children, style}) => {
  const {colors} = useTheme();

  return (
    <RNText style={[style, styles.text, {color: colors.text}]}>
      {children}
    </RNText>
  );
});
