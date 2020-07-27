import React, { useEffect, useState } from 'react';
import { View, Text, Button, ActivityIndicator, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements'
import AsyncStorage from '@react-native-community/async-storage';
export default function TabADetailsScreen({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [test, setTest] = useState('');
    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@storage_Key')
            if (value !== null) {
                setTest(value);
            }
        } catch (e) {
            // error reading value
        }
    }

    getData();

    fetch('https://api-products-rafael.herokuapp.com/api/v0/products')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {isLoading ? (<ActivityIndicator />)
                : (
                    <View>
                        <Text>Welcome to TabA page {test}</Text>
                        <Button onPress={() => navigation.openDrawer()} title="Open"></Button>
                        <Button
                            onPress={() => navigation.navigate('TabA Details',
                                {
                                    papitas: 'from papitas'
                                }
                            )}
                            title="Details"
                        />
                        <FlatList
                            data={data}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                <Text>{item.category.category}, {item.name}</Text>
                            )}
                        />
                        {
                            data.map((item, i) => (
                                <ListItem
                                    key={i}
                                    title={item.name}
                                    leftIcon={{ name: 'av-timer' }}
                                    bottomDivider
                                    chevron
                                    onPress={() => navigation.navigate('TabA Details',
                                        {
                                            papitas: item.id
                                        }
                                    )}
                                />
                            ))
                        }
                    </View>
                )
            }

        </View>
    );

}