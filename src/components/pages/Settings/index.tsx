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

export const Settings: React.FC = React.memo(({}) => {
  const dispatch = useDispatch();
  const {theme} = useSelector((state: IRootState) => ({
    theme: state.settingsReducer.theme,
    language: state.settingsReducer.language,
  }));

  const _toggleSwitchDarkMode = async (isDarkMode: boolean) => {
    if (isDarkMode) {
      return await dispatch(changeTheme('dark'));
    }
    await dispatch(changeTheme('light'));
  };

  const switchLanguage = () => {
    persistor.purge();
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
