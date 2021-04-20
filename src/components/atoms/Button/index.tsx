import React from 'react';
import {TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import {Text} from '../Text';

interface Props {
  style?: ViewStyle;
  label: string;
  onPress?: () => void;
  labelStyle?: TextStyle;
}

export const Button: React.FC<Props> = React.memo(
  ({label, style, onPress, labelStyle}) => {
    return (
      <TouchableOpacity onPress={onPress} style={[style]}>
        <Text style={labelStyle}>{label}</Text>
      </TouchableOpacity>
    );
  },
);
