import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View, ViewStyle} from 'react-native';
import {Input} from '../../atoms/Input';
import styles from './styles';

interface Props {
  placeholder: string;
  searchKey: string;
  onSearch: (text: string) => void;
  style?: ViewStyle;
}

export const SearchBar: React.FC<Props> = React.memo(
  ({searchKey, placeholder, onSearch, style}) => {
    const {colors} = useTheme();

    return (
      <View style={[{backgroundColor: colors.card}, style]}>
        <Input
          value={searchKey}
          placeholder={placeholder}
          onChange={onSearch}
        />
      </View>
    );
  },
);
