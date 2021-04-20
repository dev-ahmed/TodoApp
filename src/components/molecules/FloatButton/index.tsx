import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Icon} from '../../atoms/Icon';
import styles from './styles';

interface Props {
  onPress: () => void;
}

export const FloatButton: React.FC<Props> = React.memo(({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon name="plus" />
    </TouchableOpacity>
  );
});
