import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './login';
const Stack = createStackNavigator();

export default function Login() {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
}