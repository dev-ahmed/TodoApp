import React from 'react';
import {ViewStyle} from 'react-native';
import {Button} from '../../atoms/Button';
import styles from './styles';

interface Props {
  onPress: () => void;
}

export const FloatButton: React.FC<Props> = React.memo(({onPress}) => {
  return (
    <Button
      onPress={onPress}
      label="+"
      labelStyle={styles.label}
      style={styles.container}
    />
  );
});
