/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ThemeSetting from './components';

const DarkModeSwitch = () => {
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <ThemeSetting />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default DarkModeSwitch;
