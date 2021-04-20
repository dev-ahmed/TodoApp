import {StyleSheet, I18nManager} from 'react-native';

export default StyleSheet.create({
  text: {
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
});
