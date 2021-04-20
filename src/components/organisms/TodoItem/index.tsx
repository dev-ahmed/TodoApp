import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {fonts} from '../../../constants/fonts';
import {ROUTES} from '../../../constants/routes';
import {Todo} from '../../../interfaces/Todo';
import {Text} from '../../atoms/Text';
import {CheckBox} from '../../molecules/CheckBox';
import styles from './styles';

interface Props {
  item: Todo;
}

export const TodoItem: React.FC<Props> = React.memo(({item}) => {
  const {title, isDone, date} = item;

  const navigation = useNavigation();

  const openTodo = () => {
    navigation.navigate(ROUTES.NEW_TODO, {...item});
  };

  return (
    <TouchableOpacity onPress={openTodo} style={styles.container}>
      <CheckBox isChecked={isDone} />
      <View style={styles.todoDetailsContainer}>
        <Text numberOfLines={2} style={[fonts.headlines.title, styles.title]}>
          {title}
        </Text>
        <Text style={[fonts.headlines.description]}>{date}</Text>
      </View>
    </TouchableOpacity>
  );
});
