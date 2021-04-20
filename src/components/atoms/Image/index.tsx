import React from 'react';
import FImage, {FastImageProps} from 'react-native-fast-image';
import styles from './styles';

export const Image: React.FC<FastImageProps> = React.memo(({source, style}) => {
  return <FImage style={[style]} source={source} />;
});
