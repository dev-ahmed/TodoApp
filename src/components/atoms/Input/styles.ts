import {I18nManager, StyleSheet} from 'react-native';
import {fonts} from '../../../constants/fonts';

export default StyleSheet.create({
  text: {
    ...fonts.SpaceMono.regular,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
});
