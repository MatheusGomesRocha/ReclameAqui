import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import AppTab from './src/navigators/AppTab';
import L from './src/screens/LoginScreen';

export default () => {
  return(
      <L />
  );
}