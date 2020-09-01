import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const LoginStack = createStackNavigator();

export default () => {
    return(
        <LoginStack.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
                headerTintColor: '#fff',
                headerStyle:{
                    height: 60, backgroundColor: '#5E239D'
                }
            }}
            tabBarVisible={false}
        >
            <LoginStack.Screen name="login" component={LoginScreen} options={{ headerTitle: 'LOGIN' }}/>
            <LoginStack.Screen name="register" component={RegisterScreen} options={{ headerTitle: 'CADASTRO' }}/>
        </LoginStack.Navigator>
    );
}