import React from 'react';
import {FlatList, ListRenderItem, ViewStyle} from 'react-native';
import {Todo} from '../../../interfaces/Todo';
import {TodoItem} from '../../organisms/TodoItem';

interface Props {
  data: Todo[];
  style?: ViewStyle;
  headerComponent?: React.FC;
  showCheckBox?: boolean;
}

export const TodosList: React.FC<Props> = React.memo(
  ({data, style, headerComponent, showCheckBox = true}) => {
    const renderItem: ListRenderItem<Todo> = ({item}) => {
      return <TodoItem showCheckBox={showCheckBox} item={item} />;
    };

    return (
      <FlatList
        ListHeaderComponent={headerComponent}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        data={data}
        style={style}
      />
    );
  },
);
