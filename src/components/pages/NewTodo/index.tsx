import {useNavigation} from '@react-navigation/core';
import {Formik} from 'formik';
import React from 'react';
import {useDispatch} from 'react-redux';
import {Todo} from '../../../interfaces/Todo';
import {addTodo} from '../../../store/todos/actions';
import {uid} from '../../../utils/string-helpers';
import {Button} from '../../atoms/Button';
import {Container} from '../../atoms/Container';
import {Input} from '../../atoms/Input';
import styles from './styles';

export const NewTodo: React.FC = React.memo(() => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const initialValues: Todo = {
    id: uid(),
    title: '',
    description: '',
    date: '',
    time: '',
    isDone: false,
  };

  const onAdd = (values: Todo) => {
    dispatch(addTodo(values));
    navigation.goBack();
  };

  return (
    <Container style={styles.container}>
      <>
        <Formik initialValues={initialValues} onSubmit={onAdd}>
          {({handleChange, handleSubmit, values, setFieldValue}) => (
            <>
              <Button
                onPress={handleSubmit}
                label="Done"
                labelStyle={styles.done}
              />
              <Input
                onChange={handleChange('title')}
                value={values.title}
                style={styles.title}
                placeholder="Title"
              />
              <Input
                onChange={handleChange('description')}
                value={values.description || ''}
                style={styles.description}
                placeholder="Description"
                multiline
              />
            </>
          )}
        </Formik>
      </>
    </Container>
  );
});
