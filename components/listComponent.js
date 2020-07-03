import React from 'react';
import { FlatList, View, Text, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import Constants from 'expo-constants';
const Data = [
    {
        id: "1",
        name: "reacjs",
        photo: "https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png"
    },
    {
        id: "2",
        name: "react native",
        photo: "https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png"
    },
    {
        id: "3",
        name: "angular",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png"
    },
    {
        id: "4",
        name: "angularjs",
        photo: 'https://cdn.slidesharecdn.com/ss_thumbnails/angularjs-161213223326-thumbnail-4.jpg'
    }

]

function Item(props) {
    return (
        <View style={styles.item}>
            <View styles={styles.containerImage}>
                <Image style={styles.image} source={{ uri: props.item.photo }}></Image>
            </View>
            <View style={styles.containerInfo}>
                <View >
                    <Text>
                        {props.item.id}
                    </Text>
                </View>
                <View >
                    <Text>
                        {props.item.name}
                    </Text>
                </View>
            </View>

        </View >
    )
}

export default function ListComponent() {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={Data}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 5,
        flexDirection: 'row'
    },
    title: {
        fontSize: 32,
    },
    image: {
        width: 30,
        height: 30
    },
    containerImage: {
        flex: 1,
        margin: 10
    },
    containerInfo: {
        flex: 5,
        margin: 10
    }
});
