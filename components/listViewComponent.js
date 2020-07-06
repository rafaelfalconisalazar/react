import React from "react";
import { View, Text, Image, SectionList, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import Constants from 'expo-constants';
const Data = [
    {
        id: "1",
        name: "reactjs",
        photo: "https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png"
    },
    {
        id: "2",
        name: "angular",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png"
    },
    {
        id: "3",
        name: "nestjs",
        photo: "https://miro.medium.com/max/1640/0*_SlojR7K-T0qZ-Gu.png"
    },
    {
        id: "4",
        name: "expressjs",
        photo: "https://miro.medium.com/max/1640/0*_SlojR7K-T0qZ-Gu.png"
    },
    {
        id: "5",
        name: "expressjs",
        photo: "https://d2vs8yx90uvogk.cloudfront.net/2019/11/ExpressJS.png"
    },
    {
        id: "6",
        name: "reactjs",
        photo: "https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png"
    },
    {
        id: "7",
        name: "angular",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png"
    },
    {
        id: "8",
        name: "nestjs",
        photo: "https://miro.medium.com/max/1640/0*_SlojR7K-T0qZ-Gu.png"
    },
    {
        id: "9",
        name: "expressjs",
        photo: "https://miro.medium.com/max/1640/0*_SlojR7K-T0qZ-Gu.png"
    },
    {
        id: "10",
        name: "expressjs",
        photo: "https://d2vs8yx90uvogk.cloudfront.net/2019/11/ExpressJS.png"
    }

]
const DATA2 = [
    {
        title: "Main dishes",
        data: [
            {
                id: "1",
                name: "reactjs",
                photo: "https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png"
            },
            {
                id: "2",
                name: "angular",
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png"
            },
            {
                id: "3",
                name: "nestjs",
                photo: "https://miro.medium.com/max/1640/0*_SlojR7K-T0qZ-Gu.png"
            },
            {
                id: "4",
                name: "expressjs",
                photo: "https://miro.medium.com/max/1640/0*_SlojR7K-T0qZ-Gu.png"
            },
            {
                id: "5",
                name: "expressjs",
                photo: "https://d2vs8yx90uvogk.cloudfront.net/2019/11/ExpressJS.png"
            },
            {
                id: "6",
                name: "reactjs",
                photo: "https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png"
            },
            {
                id: "7",
                name: "angular",
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png"
            },
            {
                id: "8",
                name: "nestjs",
                photo: "https://miro.medium.com/max/1640/0*_SlojR7K-T0qZ-Gu.png"
            },
            {
                id: "9",
                name: "expressjs",
                photo: "https://miro.medium.com/max/1640/0*_SlojR7K-T0qZ-Gu.png"
            },
            {
                id: "10",
                name: "expressjs",
                photo: "https://d2vs8yx90uvogk.cloudfront.net/2019/11/ExpressJS.png"
            }
        
        ]
    }
];
function Item(props) {
    return (
        <View style={styles.item}>
            <View style={styles.containerImage}>
                <Image style={styles.image}
                    source={{ uri: props.item.photo }} />
            </View>
            <View style={styles.containerInfo}>
                <View>
                    <Text>{props.item.id}</Text>
                </View>
                <View>
                    <Text>{props.item.name}</Text>
                </View>
            </View>


        </View>
    )
}

function ItemSection(props){
    return(
        <View style={styles.item}>
            <Text>
               {props.item.name} 
            </Text>
        </View>
    )
}

export default function ListViewComponent() {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={Data}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={item => item.id}
            />
            <SectionList
                sections={DATA2}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <ItemSection item={item} />}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight
    },
    image: {
        width: 100,
        height: 100
    },
    item: {
        backgroundColor: '#7700A2',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row'
    },
    containerImage: {
        flex: 2,
        margin: 10
    },
    containerInfo: {
        flex: 5,
        margin: 10
    },
    header: {
        fontSize: 32,
        backgroundColor: "#fff"
    }
})
