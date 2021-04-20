import {StyleSheet} from 'react-native';
import {metrics} from '../../../constants/metrics';
import {calcHeight} from '../../../utils/normalize';

export default StyleSheet.create({
  container: {
    paddingHorizontal: metrics.h_spacing_l,
    paddingTop: calcHeight(50),
    paddingBottom: 0,
  },
});
