import {useTheme} from '@react-navigation/native';
import React from 'react';
import {TextStyle, Text as RNText} from 'react-native';
import styles from './styles';
interface Props {
  children?: Element;
  style?: TextStyle[] | TextStyle;
  numberOfLines?: number;
}

export const Text: React.FC<Props> = React.memo(
  ({children, style, numberOfLines = 1}) => {
    const {colors} = useTheme();

    return (
      <RNText
        numberOfLines={numberOfLines}
        style={[style, styles.text, {color: colors.text}]}>
        {children}
      </RNText>
    );
  },
);
