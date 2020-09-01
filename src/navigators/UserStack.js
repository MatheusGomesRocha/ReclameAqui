import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UserScreen from '../screens/UserScreen';

import ProfileScreen from '../screens/ProfileScreen';
import HistoryScreen from '../screens/HistoryScreen';

const UserStack = createStackNavigator();

export default () => {
    return(
        <UserStack.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
                headerTintColor: '#fff',
                headerStyle:{
                    height: 60, backgroundColor: '#5E239D'
                }
            }}
        >
            <UserStack.Screen name="user" component={UserScreen} options={{ headerTransparent: true, headerTitle: null, headerTransparent: true}} />
            <UserStack.Screen name="profile" component={ProfileScreen} options={{ headerTitle: 'EDITAR PERFIL' }}/>
            <UserStack.Screen name="history" component={HistoryScreen} options={{ headerTitle: 'HISTÓRICO' }}/>
        </UserStack.Navigator>
    );
}