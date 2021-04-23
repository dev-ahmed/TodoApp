import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ROUTES} from '../constants/routes';
import {translate} from '../utils/i18n-helper';
import {Home} from '../components/pages/Home';
import {CalendarView} from '../components/pages/CalendarView';
import {colors} from '../constants/colors';

type ParamList = {
  Home: undefined;
  CalendarView: undefined;
};

const Tab = createBottomTabNavigator<ParamList>();

export const Tabs = () => {
  return (
    <Tab.Navigator tabBarOptions={{activeTintColor: colors.amber_dark_300}}>
      <Tab.Screen
        options={{tabBarLabel: translate('Home')}}
        name={ROUTES.HOME}
        component={Home}
      />
      <Tab.Screen
        options={{tabBarLabel: translate('Calendar')}}
        name={ROUTES.CALENDAR_VIEW}
        component={CalendarView}
      />
    </Tab.Navigator>
  );
};
