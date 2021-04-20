import {StyleSheet} from 'react-native';
import {metrics} from '../../../constants/metrics';
import {calcHeight, calcWidth} from '../../../utils/normalize';

export default StyleSheet.create({
  container: {},
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: metrics.v_spacing_xl,
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
