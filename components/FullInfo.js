import React from "react";

import { StyleSheet, View, Text } from "react-native";
import { globalStyle } from "../styles/style";

export default function FullInfo({ route }) {
    return (
        <View style={ globalStyle.main }>
            <Text style={ globalStyle.title }>{ route.params.name } </Text>
            <Text>{ route.params.anons }</Text>
            <Text>{ route.params.full }</Text>
        </View>
    )
}