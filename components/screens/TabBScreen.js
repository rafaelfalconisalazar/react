import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, ActivityIndicator } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from "../firebase/firebase";
import "firebase/firestore";
export default function TabBscreen({ navigation }) {
    const citiesRef = firebase.firestore().collection('ciudades');
    const products = firebase.firestore().collection('products');
    const [data, setData] = useState([]);
    const [one, setOne] = useState();
    const [isLoading, setLoading] = useState(true);
    const synch = () => {
        let iphone = products.doc().set({
            description: "motorolo moto g6 plus", name: "motorola", price: 250.55
        });
        let a = [];
        products.get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    a.push(doc.data());
                })
                setData(a)
            })
            .catch((err) => {
                console.log('Error getting documents', err);
            });
    }
    const oneDocument = () => {

        firebase.firestore().collection('products').where('price', '==', 50.50).get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    console.log(doc.data())
                })
            }
            )
            .catch((err) => {
                console.log('Error getting documents', err);
            });
        firebase.firestore().collection('products').doc('1').get()
            .then(snapshot => {
                setOne(snapshot.data())
            })
            .catch((err) => {
                console.log('Error getting documents', err);
            }).finally(() => setLoading(false));
    }
    useEffect(() => {
        let isMounted = true;
        synch();
        oneDocument();

        return () => { isMounted = false };
    }, [])


    return (

        <View>
            {isLoading ? (<ActivityIndicator />)
                : (
                    <View>
                        <Text style={{ textAlign: 'center', color: 'blue', marginTop: 300 }}>
                            Welcome to Tab B screen ! {one.name}
                        </Text>
                        <Button
                            onPress={() => navigation.navigate('Tab', {}, navigation.navigate('TabA Details',
                                {
                                    papitas: 'from papitas'
                                }))}
                            title="Learn More"
                        />
                        {
                            data.map((item, i) => (
                                <ListItem
                                    key={i}
                                    title={item.name}
                                    leftIcon={{ name: 'av-timer' }}
                                    bottomDivider
                                    chevron
                                />
                            ))
                        }
                    </View>
                )
            }

        </View>
    );
}