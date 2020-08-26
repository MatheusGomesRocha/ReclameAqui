import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import AppTab from './src/navigators/AppTab';

export default () => {
  return(
      <NavigationContainer>
        <AppTab />
        <StatusBar backgroundColor="#5E239D" barStyle="light-content"/>
      </NavigationContainer>
  );
}