import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';
import {calcFont, calcHeight} from '../../../utils/normalize';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: calcHeight(50),
    right: calcHeight(50),
    height: calcHeight(50),
    width: calcHeight(50),
    borderRadius: calcHeight(50),
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.amber_dark_300,
  },
  label: {
    fontSize: calcFont(40),
    color: colors.white,
    alignSelf: 'center',
    textAlign: 'center',
  },
});
