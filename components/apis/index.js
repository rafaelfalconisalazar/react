import React, { useState, useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Principal from '../screens/DrawerNavigation';
import AuthContext from "./context";
import Login from './loginStack';
import { createStackNavigator } from '@react-navigation/stack';

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