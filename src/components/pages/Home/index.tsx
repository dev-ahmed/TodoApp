import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {ROUTES} from '../../../constants/routes';
import {IRootState, persistor} from '../../../store';
import {Container} from '../../atoms/Container';
import {FloatButton} from '../../molecules/FloatButton';
import {SearchBar} from '../../organisms/SearchBar';
import {TodosList} from '../../templates/TodosList';
import styles from './styles';

export const Home: React.FC = React.memo(({}) => {
  const navigation = useNavigation();
  const [searchKey, setSearchKey] = useState('');

  const {todosList} = useSelector((state: IRootState) => ({
    todosList: state.todosReducer.list,
  }));

  const onSearch = (text: string) => {
    setSearchKey(text);
  };

  const openAddTodoScreen = () => {
    navigation.navigate(ROUTES.NEW_TODO);
  };

  console.log('====================================');
  console.log(todosList);
  console.log('====================================');

  return (
    <Container style={styles.container}>
      <>
        <SearchBar
          onSearch={onSearch}
          searchKey={searchKey}
          style={styles.search}
          placeholder={'Search'}
        />
        <TodosList data={todosList} />
        <FloatButton onPress={openAddTodoScreen} />
      </>
    </Container>
  );
});
