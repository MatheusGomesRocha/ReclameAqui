import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SearchedScreen from '../screens/SearchedScreen';


const HomeStack = createStackNavigator();

export default () => {
    return(
        <HomeStack.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
                headerTintColor: '#fff',
                headerStyle:{
                    height: 60, backgroundColor: '#5E239D'
                }
            }}
        >
            <HomeStack.Screen name="home" component={HomeScreen} options={{ headerTransparent: true, headerTitle: null, headerTransparent: true}} />
            <HomeStack.Screen name="searched" component={SearchedScreen} options={{ headerTitle: 'Comentários' }}/>
        </HomeStack.Navigator>
    );
}