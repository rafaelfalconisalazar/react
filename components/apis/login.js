import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableHighlight, View, TouchableOpacity } from "react-native";
import * as Analytics from 'expo-firebase-analytics';
import { Input } from 'react-native-elements';
import AuthContext from "./context";
import AsyncStorage from '@react-native-community/async-storage';
export default function HomeScreen() {

    const { login } = React.useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [passwordForm, setPassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('@storage_Key', value)
        } catch (e) {
            // saving error
        }
    }
    function loginApp() {
        try {
            fetch('https://api-products-rafael.herokuapp.com/api/v0/auth/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: "",
                    email: email,
                    name: "",
                    password: passwordForm
                })
            }).then((response) => response.json())
                .then((json) => {
                    if (json.message === undefined) {
                        storeData(json.id)
                        Analytics.logEvent('login', {
                            contentType: 'text',
                            itemId: 'Expo rocks!',
                            method: 'facebook'
                        });
                        login()
                    } else {
                        setModalVisible(true);
                    }
                })
        } catch (error) {
            setModalVisible(true);
        }

    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Datos incorrectos</Text>

                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Text style={styles.textStyle}>ok</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
            <Text>Home Screen</Text>
            <Input
                placeholder='user'
                onChangeText={returnOnChangeText => setEmail(returnOnChangeText)}
            />
            <Input
                placeholder='password'
                onChangeText={passwordForm => setPassword(passwordForm)}
            />
            <TouchableOpacity onPress={loginApp}><Text>Login</Text></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});