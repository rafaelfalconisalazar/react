import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function Details() {

    let route = useRoute();
    let papitas = route.params.papitas;
    const [data, setData] = useState();
    const [isLoading, setLoading] = useState(true);
    let uri = 'https://api-products-rafael.herokuapp.com/api/v0/products/' + papitas;
    const synch = () => {
        fetch(uri)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }
    useEffect(() => {
        let isMounted = true;
        synch();
        return () => { isMounted = false };

    }, [])

    return (

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            {isLoading ? (<ActivityIndicator />)
                : (
                    <View>
                        <Text>
                            TabA details Here!
                        </Text>
                        <Text>
                            {papitas}
                        </Text>


                        <Text>{data.category.category}, {data.name}</Text>

                    </View>

                )
            }
        </View>
    )
}