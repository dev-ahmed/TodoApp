import {RouteProp, useNavigation, useRoute} from '@react-navigation/core';
import {Formik} from 'formik';
import _ from 'lodash';
import React from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {colors} from '../../../constants/colors';
import {Todo} from '../../../interfaces/Todo';
import {RootStackParamList} from '../../../navigation/root-navigation';
import {addTodo, deleteTodo} from '../../../store/todos/actions';
import {calcFont} from '../../../utils/normalize';
import {uid} from '../../../utils/string-helpers';
import {Button} from '../../atoms/Button';
import {Container} from '../../atoms/Container';
import {Icon} from '../../atoms/Icon';
import {Input} from '../../atoms/Input';
import styles from './styles';

export const NewTodo: React.FC = React.memo(() => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {params} = useRoute<RouteProp<RootStackParamList, 'NewTodo'>>();

  const initialValues: Todo = {
    id: params.id || uid(),
    title: params.title || '',
    description: params.description || '',
    date: params.date || '',
    time: params.time || '',
    isDone: params.isDone || false,
  };

  const onAdd = async (values: Todo) => {
    if (!(_.isEmpty(values.title) || _.isEmpty(values.description))) {
      await dispatch(addTodo(values));
      navigation.goBack();
    }
  };

  const onDelete = async () => {
    if (params.id) {
      await dispatch(deleteTodo(params.id));
      navigation.goBack();
    }
  };

  return (
    <Container style={styles.container}>
      <>
        <Formik initialValues={initialValues} onSubmit={onAdd}>
          {({handleChange, handleSubmit, values, setFieldValue}) => (
            <>
              <View style={styles.actionsContainer}>
                <Icon
                  onPress={onDelete}
                  size={calcFont(20)}
                  color={colors.amber_dark_300}
                  name="trash-can-outline"
                />
                <Button onPress={handleSubmit} label="Done" />
              </View>
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
