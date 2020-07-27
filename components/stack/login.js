import React,{useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Input, CheckBox } from 'react-native-elements';
import AuthContext from "./context";

export default function HomeScreen() {
    const { login } = React.useContext(AuthContext);
    const [check, setCheck] = useState(true);
    console.log(check)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Input
                placeholder='BASIC INPUT'
            />
            <CheckBox
                center
                title='Click Here'
                checked={check}
                onPress={() => setCheck(!check)}
            />
            <TouchableOpacity onPress={login}><Text>Login</Text></TouchableOpacity>
        </View>
    );
}