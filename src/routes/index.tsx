import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainRoutes} from './MainRoutes';

const {Navigator, Screen} = createNativeStackNavigator();

function Router() {
  return (
    <Navigator initialRouteName="MainMenu">
      {MainRoutes.map(value => {
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

export default Router;
