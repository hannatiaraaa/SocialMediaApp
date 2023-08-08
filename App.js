import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import MainRouter from './src/routes';
import {nav} from './src/hooks/useCurrentNavigation';

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={nav}>
        <MainRouter />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
export default App;
