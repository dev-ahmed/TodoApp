import {useNavigation} from '@react-navigation/core';
import Moment from 'moment';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {fonts} from '../../../constants/fonts';
import {ROUTES} from '../../../constants/routes';
import {Todo} from '../../../interfaces/Todo';
import {markAsDone} from '../../../store/todos/actions';
import {Text} from '../../atoms/Text';
import {CheckBox} from '../../molecules/CheckBox';
import styles from './styles';
interface Props {
  item: Todo;
  showCheckBox: boolean;
}

export const TodoItem: React.FC<Props> = React.memo(
  ({item, showCheckBox = true}) => {
    const {title, isDone, datetime} = item;
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const openTodo = () => {
      navigation.navigate(ROUTES.NEW_TODO, {...item});
    };

    const onCheck = () => {
      dispatch(markAsDone(item.id));
    };

    const doneStyle = {opacity: isDone ? 0.5 : 1};

    return (
      <View style={[styles.container, doneStyle]}>
        {showCheckBox && <CheckBox onCheck={onCheck} isChecked={isDone} />}
        <TouchableOpacity
          onPress={openTodo}
          style={styles.todoDetailsContainer}>
          <Text numberOfLines={2} style={[fonts.headlines.title, styles.title]}>
            {title}
          </Text>
          <Text style={[fonts.headlines.description]}>
            {Moment(datetime).calendar()}
          </Text>
        </TouchableOpacity>
      </View>
    );
  },
);
