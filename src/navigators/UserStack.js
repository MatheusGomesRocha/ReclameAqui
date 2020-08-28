import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UserScreen from '../screens/UserScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ProfileScreen from '../screens/ProfileScreen';

const UserStack = createStackNavigator();

export default () => {
    return(
        <UserStack.Navigator>
            <UserStack.Screen name="user" component={UserScreen} options={{ headerTransparent: true, headerTitle: null, headerTransparent: true}} />
            <UserStack.Screen name="login" component={LoginScreen} options={{ headerTitle: 'LOGIN', headerTitleAlign: 'center', headerTintColor: '#fff', headerStyle: { height: 70, backgroundColor: '#5E239D'} }} />
            <UserStack.Screen name="register" component={RegisterScreen} options={{ headerTitle: 'CADASTRO', headerTitleAlign: 'center', headerTintColor: '#fff', headerStyle: { height: 70, backgroundColor: '#5E239D'} }} />
            <UserStack.Screen name="profile" component={ProfileScreen} options={{ headerTitle: 'EDITAR PERFIL', headerTitleAlign: 'center', headerTintColor: '#fff', headerStyle: { height: 70, backgroundColor: '#5E239D'} }} />
        </UserStack.Navigator>
    );
}