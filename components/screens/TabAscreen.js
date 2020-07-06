import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TabADetailsScreen from './TabADetailsScreen';
import Details from './Details';

const Stack = createStackNavigator();
export default function TabAScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="TabA Home" component={TabADetailsScreen} />
            <Stack.Screen name="TabA Details" component={Details} />
        </Stack.Navigator>
    );
}