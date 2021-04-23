import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {CalendarView} from '../components/pages/CalendarView';
import {Home} from '../components/pages/Home';
import {colors} from '../constants/colors';
import {ROUTES} from '../constants/routes';

type ParamList = {
  Home: undefined;
  CalendarView: undefined;
};

const Tab = createBottomTabNavigator<ParamList>();

export const Tabs = () => {
  return (
    <Tab.Navigator tabBarOptions={{activeTintColor: colors.amber_dark_300}}>
      <Tab.Screen
        options={{tabBarLabel: 'Home'}}
        name={ROUTES.HOME}
        component={Home}
      />
      <Tab.Screen
        options={{tabBarLabel: 'Calendar'}}
        name={ROUTES.CALENDAR_VIEW}
        component={CalendarView}
      />
    </Tab.Navigator>
  );
};
