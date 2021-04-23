import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useCallbackOne} from 'use-memo-one';
import {ROUTES} from '../../../constants/routes';
import {IRootState} from '../../../store';
import {calcFont} from '../../../utils/normalize';
import {searchTodos} from '../../../utils/todos-helper';
import {Container} from '../../atoms/Container';
import {Icon} from '../../atoms/Icon';
import {FloatButton} from '../../molecules/FloatButton';
import {SearchBar} from '../../organisms/SearchBar';
import {TodosList} from '../../templates/TodosList';
import styles from './styles';
import _ from 'lodash';

export const Home: React.FC = React.memo(({}) => {
  const navigation = useNavigation();
  const [searchKey, setSearchKey] = useState('');

  const {todosList} = useSelector((state: IRootState) => ({
    todosList: state.todosReducer.list,
  }));

  const [todos, setTodos] = useState(todosList);

  const initTodos = useCallbackOne(() => {
    setTodos(todosList);
  }, [todosList]);

  useEffect(() => {
    initTodos();
  }, [initTodos]);

  const onSearch = useCallbackOne(
    _.debounce((text: string) => {
      setSearchKey(text);
      const newTodos = searchTodos(todosList, text);
      setTodos(newTodos);
    }, 500),
    [],
  );

  const openAddTodoScreen = () => {
    navigation.navigate(ROUTES.NEW_TODO);
  };

  const openSettings = () => {
    navigation.navigate(ROUTES.SETTINGS);
  };

  return (
    <Container style={styles.container}>
      <>
        <Icon
          onPress={openSettings}
          size={calcFont(20)}
          name="cog-outline"
          style={styles.settingsIcon}
        />

        <SearchBar
          onSearch={onSearch}
          searchKey={searchKey}
          style={styles.search}
          placeholder={'Search'}
        />
        <TodosList emptyMessage="Start add your todos here" data={todos} />
        <FloatButton onPress={openAddTodoScreen} />
      </>
    </Container>
  );
});
