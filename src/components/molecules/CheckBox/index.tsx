import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Icon} from '../../atoms/Icon';
import styles from './styles';

interface Props {
  isChecked: boolean;
  onCheck: () => void;
}

export const CheckBox: React.FC<Props> = React.memo(({isChecked, onCheck}) => {
  return (
    <TouchableOpacity onPress={onCheck} style={styles.container}>
      {isChecked && <Icon name="check" />}
    </TouchableOpacity>
  );
});
