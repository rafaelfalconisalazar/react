import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Counter() {
    const [count, setCount] = useState(0);
    const handleDown = () => setCount(count => count - 1);
    const handleUp = () => setCount(count => count + 1);
    if (count > 9) {
        return (
            <View style={style.container}>
                <View style={style.subContainer}>
                    <View style={style.counterContainer}>
                        <Text style={style.text}>{count}</Text>
                    </View>
                    <TouchableOpacity style={style.btn} onPress={handleDown}>
                        <Text style={style.btnText}>-</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.btn} onPress={handleUp}>
                        <Text style={style.btnText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    return (
        <View style={style.container}>
            <View style={style.subContainer}>
                <TouchableOpacity style={style.btn} onPress={handleDown}>
                    <Text style={style.btnText}>-</Text>
                </TouchableOpacity>
                <View style={style.counterContainer}>
                    <Text style={style.text}>{count}</Text>
                </View>
                <TouchableOpacity style={style.btn} onPress={handleUp}>
                    <Text style={style.btnText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );


};

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(3, 104, 255, 0.4)',
        justifyContent: 'center'
    },
    subContainer: {
        height: 50,
        width: '100%',
        paddingHorizontal: 10,
        flexDirection: 'row'
    },
    btn: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#005c06'
    },
    btnText: {
        fontSize: 50,
        fontWeight: 'bold'
    },
    counterContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 100,
        fontWeight: 'bold'
    }
})
