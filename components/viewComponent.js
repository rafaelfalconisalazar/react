import React, { } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet,TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';

const Title = 'helloworld';
const imageUrl = { uri: 'https://images6.alphacoders.com/104/thumb-1920-1044088.jpg' };
const imageUrlBackGround = { uri: 'https://reactjs.org/logo-og.png' };

export default function Component(props) {

  const route = useRoute();
  let text = route.params.text;

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 3 }}>

        <ImageBackground source={imageUrlBackGround} style={styles.image}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Lista')}><Text>Lista</Text></TouchableOpacity>
          <Text style={styles.text}>{text}</Text>
          <Text style={styles.text}>{route.params.text2}</Text>
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

