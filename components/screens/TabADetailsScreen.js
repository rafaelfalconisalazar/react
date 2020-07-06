import React from 'react';
import { View, Text, Button } from 'react-native';

export default function TabADetailsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Welcome to TabA page</Text>
            <Button
                onPress={() => navigation.navigate('TabA Details',
                {
                    papitas:'from papitas'
                }
                )}
                title='Go To TabA details'
            />
        </View>
    );

}