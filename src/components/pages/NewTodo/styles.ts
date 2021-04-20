import {StyleSheet} from 'react-native';
import {calcHeight, calcWidth} from '../../../utils/normalize';

export default StyleSheet.create({
  container: {},
  done: {
    textAlign: 'right',
    alignSelf: 'flex-end',
  },
  title: {
    paddingVertical: calcHeight(10),
    paddingHorizontal: calcWidth(10),
  },
  description: {
    minHeight: calcHeight(300),
    marginVertical: calcHeight(10),
    paddingVertical: calcHeight(10),
    paddingHorizontal: calcWidth(10),
  },
});
