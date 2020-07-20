import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import AuthContext from "./context";

export default function HomeScreen() {
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