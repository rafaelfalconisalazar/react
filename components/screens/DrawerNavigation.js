import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './TabNavigation'
import NotificacionsSCreenn from './NotificacionsScreen'

const Drawer = createDrawerNavigator();

export default function Principal() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Notification" component={NotificacionsSCreenn} />
                <Drawer.Screen name="Home" component={HomeScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}