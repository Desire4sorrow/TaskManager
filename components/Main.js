import React, {useState} from "react";

import { View, TouchableOpacity, FlatList, Text } from "react-native";
import { globalStyle } from "../styles/style";

export default function Main({ navigation }) {
    const loadScene = (item) => {
        navigation.navigate('FullInfo', item);
    }

    const [news, setNews] = useState( [
        { name: 'Google', anons: 'How can I join to Google', full: 'Никак' },
        { name: 'Google', anons: 'How can I join to Google', full: 'Никак' },
        { name: 'Google', anons: 'How can I join to Google', full: 'Никак' }
    ]);

    return (
        <View style={ globalStyle.main }>
            <FlatList data={ news } renderItem={ ({ item }) => (
                <TouchableOpacity onPress={ () => loadScene(item) }>
                    <Text> { item.name } </Text>
                </TouchableOpacity>
                )} />
        </View>
    );
}