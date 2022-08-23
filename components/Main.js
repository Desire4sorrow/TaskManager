import React, {useState} from "react";

import { StyleSheet, View, TouchableOpacity, FlatList, Text, Image } from "react-native";
import { globalStyle } from "../styles/style";

export default function Main({ navigation }) {
    const loadScene = (item) => {
        navigation.navigate('FullInfo', item);
    }

    const [news, setNews] = useState( [
        { name: 'Google', anons: 'How can I join to Google', full: 'Никак', key: '1', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjoJ1bcqr5KCvdeujvJFN5V6wWgQysMnrAZw&usqp=CAU' },
        { name: 'Google', anons: 'How can I join to Google', full: 'Никак', key: '2', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjoJ1bcqr5KCvdeujvJFN5V6wWgQysMnrAZw&usqp=CAU' },
        { name: 'Google', anons: 'How can I join to Google', full: 'Никак', key: '3', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjoJ1bcqr5KCvdeujvJFN5V6wWgQysMnrAZw&usqp=CAU' }
    ]);

    return (
        <View style={ globalStyle.main }>
            <FlatList data={ news } renderItem={ ({ item }) => (
                <TouchableOpacity style={ item } onPress={ () => loadScene(item) }>
                    <Image source={
                        {
                            width: '100%',
                            height: 200,
                            uri: item.image
                        }
                    }></Image>
                    <Text style={ styles.title }>{ item.name }</Text>
                    <Text style={ styles.anons }>{ item.anons }</Text>
                </TouchableOpacity>
                )} />
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        width: '100%',
        marginBottom: 30,
    },
    title: {
        fontFamily: 'bold',
        fontSize: 25,
        textAlign: 'center',
        marginTop: 20,
    },
    anons: {
        fontFamily: 'regular',
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 20
    },
});