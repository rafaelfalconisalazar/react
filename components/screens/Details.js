import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function Details() {

    let route = useRoute();
    let papitas= route.params.papitas;

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                TabA details Here!
            </Text>
            <Text>
                {papitas}
            </Text>
        </View>
    )
}