import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {NewTodo} from '../components/pages/NewTodo';
import {Settings} from '../components/pages/Settings';
import {ROUTES} from '../constants/routes';
import {Todo} from '../interfaces/Todo';
import {Tabs} from './tab-navigator';

export type RootStackParamList = {
  Tabs: undefined;
  NewTodo: Todo;
  Settings: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={ROUTES.TABS}>
      <Stack.Screen name={ROUTES.TABS} component={Tabs} />
      <Stack.Screen name={ROUTES.NEW_TODO} component={NewTodo} />
      <Stack.Screen name={ROUTES.SETTINGS} component={Settings} />
    </Stack.Navigator>
  );
};
