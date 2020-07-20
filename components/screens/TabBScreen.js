import React from 'react';
import { View, Text, Button } from 'react-native';

export default function TabBscreen({ navigation }) {
    return (
        <View>
            <Text style={{ textAlign: 'center', color: 'blue', marginTop: 300 }}>
                Welcome to Tab B screen !
            </Text>
            <Button
                onPress={() => navigation.navigate('Tab', {}, navigation.navigate('TabA Details',
                    {
                        papitas: 'from papitas'
                    }))}
                title="Learn More"
            />
        </View>
    );
}