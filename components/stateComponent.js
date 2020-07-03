import React, {useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';



export default function Counter(){
    const [count,setCount]=useState(0);
    const handleDown = ()=> setCount(count=> count-1);
    const handleUp = ()=> setCount(count=> count+1);

    if( count>9){
        return (
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <TouchableOpacity style={styles.btn} onPress={handleUp}>
                        <Text style={styles.btnText}>+</Text>
                    </TouchableOpacity>
                    <View style={styles.counterCointer}>
                        <Text style={styles.text}>{count}</Text>
                    </View>
    
                    <TouchableOpacity style={styles.btn}  onPress={handleDown}>
                        <Text style={styles.btnText}>-</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <TouchableOpacity style={styles.btn} onPress={handleDown}>
                    <Text style={styles.btnText}>-</Text>
                </TouchableOpacity>
                <View style={styles.counterCointer}>
                    <Text style={styles.text}>{count}</Text>
                </View>

                <TouchableOpacity style={styles.btn}  onPress={handleUp}>
                    <Text style={styles.btnText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    text:{
        fontSize: 100,
        fontWeight: 'bold'
    },
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
    counterCointer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

