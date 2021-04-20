import React from 'react';
import {ViewStyle} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../../constants/colors';
import {calcFont} from '../../../utils/normalize';
import styles from './styles';

interface Props {
  name: string;
  style?: ViewStyle;
  size?: number;
  color?: string;
  onPress?: () => void;
}

export const Icon: React.FC<Props> = React.memo(
  ({
    name,
    style,
    size = calcFont(15),
    color = colors.grey_primary,
    onPress,
  }) => {
    return (
      <MaterialIcon
        name={name}
        style={[styles.container, style]}
        size={size}
        color={color}
        onPress={onPress}
      />
    );
  },
);
