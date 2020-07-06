import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Screen1 from '../Drawer/screen1';

function HomeScreen(props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('Screen1')}><Text>Screen1</Text></TouchableOpacity>
        </View>
    );
}

/*const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Screen1" component={Screen1} />
                <Stack.Screen name="Example" component={Screen2} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}*/

const Drawer = createDrawerNavigator();

function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Screen1" component={Screen1} />
            </Drawer.Navigator>
        </NavigationContainer>

    );
}

export default App;