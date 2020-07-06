import React, { } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';
import PropTypes from "prop-types";

const Title = 'helloworld';
const imageUrl = { uri: 'https://images6.alphacoders.com/104/thumb-1920-1044088.jpg' };
const imageUrlBackGround = { uri: 'https://reactjs.org/logo-og.png' };

export default function ViewComponent(props) {

    ViewComponent.propTypes={
        text: PropTypes.string.isRequired
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 3 }}>
                <ImageBackground source={imageUrlBackGround} style={styles.image}>
                    <Text style={styles.text}>{props.text}</Text>
                    <Text style={styles.text}>{props.text2}</Text>
                </ImageBackground>

            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center"
    },
    backgroundColor: {
        backgroundColor: 'yellow'
    },
    flexstyle: {
        flex: 1

    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        alignItems: "center"
    },
    tinyLogo: {
        width: 200,
        height: 200,

    },
    text: {
        color: "grey",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
    }
})