import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Component from '../viewComponent';
import ListComponent from '../listComponent';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function HomeScreen(props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('Example One',
                {
                    text: 'hello',
                    text2: 'world',
                })}><Text>Screen1</Text></TouchableOpacity>
        </View>
    );
}

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Example One" component={Component} />
                <Stack.Screen name="Lista" component={ListComponent} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
/*function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Example One" component={Component} />
            </Drawer.Navigator>
        </NavigationContainer>

    );
}*/
export default App