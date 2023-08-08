import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabRoutes} from './BottomTabRoutes';

const BottomTab = createBottomTabNavigator();

export default function MainRouter() {
  return (
    <BottomTab.Navigator
      initialRouteName="Feed"
      screenOptions={{tabBarShowLabel: false, headerShown: false}}>
      {BottomTabRoutes.map(value => {
        return (
          <BottomTab.Screen
            key={value.name}
            name={value.name}
            component={value.component}
            options={value.options}
          />
        );
      })}
    </BottomTab.Navigator>
  );
}
