import React from 'react';
import {FlatList, ListRenderItem, ViewStyle} from 'react-native';
import {Todo} from '../../../interfaces/Todo';
import {TodoItem} from '../../organisms/TodoItem';

interface Props {
  data: Todo[];
  style?: ViewStyle;
}

export const TodosList: React.FC<Props> = React.memo(({data, style}) => {
  const renderItem: ListRenderItem<Todo> = ({item}) => {
    return <TodoItem item={item} />;
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
