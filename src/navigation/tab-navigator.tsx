import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ROUTES} from '../constants/routes';
import {Settings} from '../components/pages/Settings';
import {translate} from '../utils/i18n-helper';
import {Home} from '../components/pages/Home';

type ParamList = {
  Home: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<ParamList>();

export const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{tabBarLabel: translate('Home')}}
        name={ROUTES.HOME}
        component={Home}
      />
      <Tab.Screen
        options={{tabBarLabel: translate('Settings')}}
        name={ROUTES.SETTINGS}
        component={Settings}
      />
    </Tab.Navigator>
  );
};
