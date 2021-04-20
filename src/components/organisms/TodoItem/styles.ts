import {StyleSheet} from 'react-native';
import {metrics} from '../../../constants/metrics';
import {calcHeight, calcWidth} from '../../../utils/normalize';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: calcHeight(10),
  },
  todoDetailsContainer: {
    marginStart: metrics.v_spacing_l,
  },
  title: {
    width: calcWidth(250),
  },
});
