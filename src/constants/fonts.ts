import {StyleSheet} from 'react-native';
import {calcFont} from '../utils/normalize';

const SpaceMono = StyleSheet.create({
  regular: {
    fontFamily: 'Space Mono',
    fontWeight: '400',
  },
  bold: {
    fontFamily: 'Space Mono Bold',
    fontWeight: '800',
  },
});

const headlines = StyleSheet.create({
  title: {
    fontSize: calcFont(26),
    ...SpaceMono.bold,
  },
  subtitle: {
    fontSize: calcFont(18),
    ...SpaceMono.bold,
  },
  description: {
    fontSize: calcFont(12),
    ...SpaceMono.regular,
  },
  date: {
    fontSize: calcFont(10),
    fontStyle: 'italic',
  },
});

export const fonts = {SpaceMono, headlines};
