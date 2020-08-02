import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from "../firebase/firebase";
import "firebase/firestore";
export default function TabBscreen({ navigation }) {
    const citiesRef = firebase.firestore().collection('cities');
    const products = firebase.firestore().collection('products');
    let iphone = products.doc('1').set({
        description: "pixel 4a", name: "google pixel", price: 399.99
    });
    let setSf = citiesRef.doc('SF').set({
        name: 'San Francisco', state: 'CA', country: 'USA',
        capital: false, population: 860000
    });
    let setQuito = citiesRef.doc('UIO').set({
        name: 'Quito', state: 'Pichincha', country: 'Ecuador',
        capital: false, population: 860000
    });
    let setLa = citiesRef.doc('LA').set({
        name: 'Los Angeles', state: 'CA', country: 'USA',
        capital: false, population: 3900000
    });
    let setDc = citiesRef.doc('DC').set({
        name: 'Washington, D.C.', state: null, country: 'USA',
        capital: true, population: 680000
    });
    let setTok = citiesRef.doc('TOK').set({
        name: 'Tokyo', state: null, country: 'Japan',
        capital: true, population: 9000000
    });
    let setBj = citiesRef.doc('BJ').set({
        name: 'Beijing', state: null, country: 'China',
        capital: true, population: 21500000
    });
    const [data, setData] = useState([]);
    const synch = () => {
        let a = [];
        firebase.firestore().collection('products').get()
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
        let a = [];
        firebase.firestore().collection('products').doc('2').get()
            .then((snapshot) => {
                console.log(snapshot.data());
            }
            )
            .catch((err) => {
                console.log('Error getting documents', err);
            });
    }
    useEffect(() => {
        let isMounted = true;
        synch();
        oneDocument();
        return () => { isMounted = false };
    }, [])


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
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Text>{item.description}, {item.name}</Text>
                )}
            />


        </View>
    );
}