import React, {ReactChild} from 'react';
import {View, ViewStyle} from 'react-native';
import {Text} from '../../atoms/Text';
import styles from './styles';

interface Props {
  label: string;
  children?: ReactChild;
  style?: ViewStyle;
}

export const SettingsItem: React.FC<Props> = React.memo(
  ({label, children, style}) => {
    return (
      <View style={[styles.container, style]}>
        <Text>{label}</Text>
        {children}
      </View>
    );
  },
);
