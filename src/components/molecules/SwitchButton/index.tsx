import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {Switch} from 'react-native';
import {colors as AppColors} from '../../../constants/colors';

interface Props {
  toggleSwitch: (value: boolean) => void;
  enabled: boolean;
}

export const SwitchButton: React.FC<Props> = React.memo(
  ({toggleSwitch, enabled}) => {
    const [isEnabled, setIsEnabled] = useState(enabled);
    const {colors} = useTheme();

    const _toggleSwitch = (value: boolean) => {
      setIsEnabled(value);
      toggleSwitch(value);
    };

    return (
      <Switch
        trackColor={{false: colors.primary, true: AppColors.light_green}}
        thumbColor={isEnabled ? colors.primary : colors.text}
        ios_backgroundColor={colors.border}
        onValueChange={_toggleSwitch}
        value={isEnabled}
      />
    );
  },
);
