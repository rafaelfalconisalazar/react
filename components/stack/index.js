import React, { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Input } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import Principal from '../screens/DrawerNavigation';
import AuthContext from "./context";
function HomeScreen() {
    const { login } = React.useContext(AuthContext);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Input
                placeholder='BASIC INPUT'
            />
            <TouchableOpacity onPress={login}><Text>Login</Text></TouchableOpacity>
        </View>
    );
}

const Stack = createStackNavigator();

function Login() {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
}

const RootStack = createStackNavigator();
function RootStackScreen({ user }) {
    return (
        <RootStack.Navigator headerMode="none">
            {user === null ? (

                <RootStack.Screen name="App" component={Login} headerMode="none" />
            ) : (

                    <RootStack.Screen name="Auth" component={Principal} />
                )
            }
        </RootStack.Navigator>
    )
}
function App() {

    const [user, setUser] = useState(null);
    const authContext = useMemo(() => {
        return {
            login: () => {
                setUser("1");
            }
        }
    })
    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                <RootStackScreen user={user} />
            </NavigationContainer>
        </AuthContext.Provider>

    );
}

export default App;