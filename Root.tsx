import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {nav} from 'shared/hooks/useCurrentNavigation';
import Router from 'routes/index';

function Root() {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={nav}>
        <Router />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default Root;
