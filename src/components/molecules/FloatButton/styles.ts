import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';
import {calcFont, calcHeight} from '../../../utils/normalize';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: calcHeight(50),
    right: calcHeight(30),
    height: calcHeight(50),
    width: calcHeight(50),
    borderRadius: calcHeight(50),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.amber_dark_300,
  },
});
