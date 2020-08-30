import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import AppTab from './src/navigators/AppTab';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react'
import { store, persistor } from './src/store';

export default () => {
  return(
    <Provider store={store}>
      <NavigationContainer>
        <PersistGate loading={null} persistor={persistor}>
          <AppTab/>
          <StatusBar backgroundColor="#5E239D" barStyle="light-content"/>
        </PersistGate>
      </NavigationContainer>
    </Provider>   
  );
}        
