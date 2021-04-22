import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {IRootState, persistor} from '../../../store';
import {changeTheme} from '../../../store/settings/actions';
import {translate} from '../../../utils/i18n-helper';
import {Container} from '../../atoms/Container';
import {Text} from '../../atoms/Text';
import {SwitchButton} from '../../molecules/SwitchButton';
import {SettingsItem} from '../../organisms/SettingsItem';
import styles from './styles';
import RNRestart from 'react-native-restart';

export const Settings: React.FC = React.memo(({}) => {
  const dispatch = useDispatch();
  const {theme} = useSelector((state: IRootState) => ({
    theme: state.settingsReducer.theme,
  }));

  const _toggleSwitchDarkMode = async (isDarkMode: boolean) => {
    if (isDarkMode) {
      return await dispatch(changeTheme('dark'));
    }
    await dispatch(changeTheme('light'));
  };

  const switchLanguage = async () => {
    await persistor.purge();
    setTimeout(() => {
      RNRestart.Restart();
    }, 300);
  };

  return (
    <Container style={styles.container}>
      <>
        <SettingsItem label={translate('Dark Mode')}>
          <SwitchButton
            enabled={theme === 'dark'}
            toggleSwitch={value => _toggleSwitchDarkMode(value)}
          />
        </SettingsItem>
        <SettingsItem label="Cache">
          <TouchableOpacity onPress={switchLanguage}>
            <Text>Purge</Text>
          </TouchableOpacity>
        </SettingsItem>
      </>
    </Container>
  );
});
