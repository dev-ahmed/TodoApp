import {StyleSheet} from 'react-native';
import {metrics} from '../../../constants/metrics';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: metrics.h_spacing_s,
  },
});
