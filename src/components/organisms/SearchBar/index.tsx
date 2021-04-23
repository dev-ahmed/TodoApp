import {useTheme} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {TextInputProps, View, ViewStyle} from 'react-native';
import {useCallbackOne} from 'use-memo-one';
import {Input} from '../../atoms/Input';

interface Props {
  placeholder: string;
  searchKey: string;
  onSearch: (text: string) => void;
  style?: ViewStyle;
}

export const SearchBar: React.FC<Props & TextInputProps> = React.memo(
  ({placeholder, onSearch, style, searchKey}) => {
    const {colors} = useTheme();
    const [key, setKey] = useState(searchKey);

    const initSearchKey = useCallbackOne(() => {
      setKey(searchKey);
    }, [searchKey]);

    useEffect(() => {
      initSearchKey();
    }, [initSearchKey]);

    return (
      <View style={[{backgroundColor: colors.card}, style]}>
        <Input
          value={key}
          placeholder={placeholder}
          onChange={text => {
            setKey(text);
            onSearch(text);
          }}
        />
      </View>
    );
  },
);
