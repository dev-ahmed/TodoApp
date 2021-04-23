import React from 'react';
import {FlatList, ListRenderItem, ViewStyle} from 'react-native';
import {fonts} from '../../../constants/fonts';
import {Todo} from '../../../interfaces/Todo';
import {Text} from '../../atoms/Text';
import {TodoItem} from '../../organisms/TodoItem';
import styles from './styles';
interface Props {
  data: Todo[];
  style?: ViewStyle;
  headerComponent?: React.FC;
  showCheckBox?: boolean;
  emptyMessage: string;
}

export const TodosList: React.FC<Props> = React.memo(
  ({data, style, headerComponent, emptyMessage, showCheckBox = true}) => {
    const renderItem: ListRenderItem<Todo> = ({item}) => {
      return <TodoItem showCheckBox={showCheckBox} item={item} />;
    };

    const renderEmptyComponent = () => {
      return (
        <Text style={[fonts.headlines.subtitle, styles.text]}>
          {emptyMessage}
        </Text>
      );
    };

    return (
      <FlatList
        ListEmptyComponent={renderEmptyComponent}
        ListHeaderComponent={headerComponent}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        data={data}
        style={style}
      />
    );
  },
);
