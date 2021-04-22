import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {colors as AppColors} from '../../../constants/colors';
import {Icon} from '../../atoms/Icon';
import styles from './styles';

interface Props {
  isChecked: boolean;
  onCheck: () => void;
}

export const CheckBox: React.FC<Props> = React.memo(({isChecked, onCheck}) => {
  const [checked, setChecked] = useState(isChecked);
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      onPress={() => {
        setChecked(prev => !prev);
        onCheck();
      }}
      style={{...styles.container, borderColor: colors.text}}>
      {checked && <Icon color={AppColors.amber_dark_300} name="check" />}
    </TouchableOpacity>
  );
});
