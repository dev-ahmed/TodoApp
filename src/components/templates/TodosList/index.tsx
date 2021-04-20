import React from 'react';
import {FlatList, ListRenderItem, Text, ViewStyle} from 'react-native';
import {Todo} from '../../../interfaces/Todo';

interface Props {
  data: Todo[];
  style?: ViewStyle;
}

export const TodosList: React.FC<Props> = React.memo(({data, style}) => {
  const renderItem: ListRenderItem<Todo> = ({item}) => {
    const {title} = item;

    return <Text> {title} </Text>;
  };

  return (
    <FlatList
      keyExtractor={item => item.id}
      renderItem={renderItem}
      data={data}
      style={style}
    />
  );
});
