import {StyleSheet} from 'react-native';
import {calcHeight} from '../../../utils/normalize';

export default StyleSheet.create({
  container: {
    height: calcHeight(15),
    width: calcHeight(15),
    borderWidth: 0.5,
  },
});
