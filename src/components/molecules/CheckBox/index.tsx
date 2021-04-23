import {useTheme} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {colors as AppColors} from '../../../constants/colors';
import {Icon} from '../../atoms/Icon';
import styles from './styles';

interface Props {
  isChecked: boolean;
  onCheck: () => void;
}

export const CheckBox: React.FC<Props> = React.memo(({isChecked, onCheck}) => {
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      onPress={onCheck}
      style={{...styles.container, borderColor: colors.text}}>
      {isChecked && <Icon color={AppColors.amber_dark_300} name="check" />}
    </TouchableOpacity>
  );
});
