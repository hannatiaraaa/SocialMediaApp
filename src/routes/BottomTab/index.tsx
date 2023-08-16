import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabRoutes} from './routes';

const {Navigator, Screen} = createBottomTabNavigator();

function MainBottomTab() {
  return (
    <Navigator
      initialRouteName="Feed"
      screenOptions={{tabBarShowLabel: false, headerShown: false}}>
      {BottomTabRoutes.map(value => {
        return (
          <Screen
            key={value.name}
            name={value.name}
            component={value.component}
            options={value.options}
          />
        );
      })}
    </Navigator>
  );
}

export default MainBottomTab;
