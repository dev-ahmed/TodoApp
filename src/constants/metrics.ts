import {Dimensions} from 'react-native';
import {calcHeight, calcWidth} from '../utils/normalize';

const {width, height} = Dimensions.get('screen');

enum metrics {
  screen_width = width,
  screen_height = height,
  content_width = width - calcWidth(5),
  v_spacing_xs = calcHeight(5),
  v_spacing_s = calcHeight(10),
  v_spacing_l = calcHeight(15),
  v_spacing_xl = calcHeight(20),
  h_spacing_xs = calcWidth(5),
  h_spacing_s = calcWidth(10),
  h_spacing_l = calcWidth(15),
}

export {metrics};
