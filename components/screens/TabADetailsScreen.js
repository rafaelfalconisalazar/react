import React, { useEffect, useState } from 'react';
import { View, Text, Button, ActivityIndicator, FlatList } from 'react-native';


export default function TabADetailsScreen({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    fetch('http://localhost:3000/api/v1/category')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {isLoading ? (<ActivityIndicator />)
                : (
                    <View>
                        <Text>Welcome to TabA page</Text>
                        <Button onPress={() => navigation.openDrawer()} title="Open"></Button>
                        <Button
                            onPress={() => navigation.navigate('TabA Details',
                                {
                                    papitas: 'from papitas'
                                }
                            )}
                            title="Learn More"
                        />
                        <Button
                            onPress={() => navigation.navigate('Tab', {}, navigation.navigate('TabB'))}
                            title="Learn More"
                        />
                        <FlatList
                            data={data}
                            keyExtractor={({ id }, index) => id}
                            renderItem={({ item }) => (
                                <Text>{item._id}, {item.name}</Text>
                            )}
                        />
                    </View>
                )
            }

        </View>
    );

}