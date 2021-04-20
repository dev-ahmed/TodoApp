import {
  widthPercentageToDP as width,
  heightPercentageToDP as height,
} from 'react-native-responsive-screen';

const calcWidth = (pixels: number) => {
  const deviceRatio = (pixels * 100) / 375;
  return width(deviceRatio);
};

const calcHeight = (pixels: number) => {
  const deviceRatio = (pixels * 100) / 812;
  return height(deviceRatio);
};

export {calcWidth, calcHeight, calcHeight as calcFont};
