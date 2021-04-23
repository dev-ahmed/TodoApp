import {RouteProp, useNavigation, useRoute} from '@react-navigation/core';
import {Formik} from 'formik';
import _ from 'lodash';
import React from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {colors} from '../../../constants/colors';
import {Todo} from '../../../interfaces/Todo';
import {RootStackParamList} from '../../../navigation/root-navigation';
import {addTodo, deleteTodo, editTodo} from '../../../store/todos/actions';
import {calcFont} from '../../../utils/normalize';
import {uid} from '../../../utils/string-helpers';
import {Button} from '../../atoms/Button';
import {Container} from '../../atoms/Container';
import {Icon} from '../../atoms/Icon';
import {Input} from '../../atoms/Input';
import {DatePicker} from '../../molecules/DatePicker';
import styles from './styles';

export const NewTodo: React.FC = React.memo(() => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {params} = useRoute<RouteProp<RootStackParamList, 'NewTodo'>>();

  const initialValues: Todo = {
    id: params?.id || '',
    title: params?.title || '',
    description: params?.description || '',
    datetime: params?.datetime ? new Date(params?.datetime) : new Date(),
    isDone: params?.isDone || false,
  };

  const onSubmit = async (values: Todo) => {
    if (_.isEmpty(values.id)) {
      return onAdd(values);
    }
    onEdit(values);
  };

  const onAdd = (values: Todo) => {
    if (!_.isEmpty(values.title)) {
      values.id = uid();
      dispatch(addTodo(values));
      navigation.goBack();
    }
  };

  const onEdit = (values: Todo) => {
    dispatch(editTodo(values));
    navigation.goBack();
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
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
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
              <DatePicker
                date={values.datetime}
                onDateChange={datetime => {
                  setFieldValue('datetime', datetime);
                }}
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
