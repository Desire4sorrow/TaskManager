import React from "react";

import {StyleSheet, View, Text, Image} from "react-native";
import { globalStyle } from "../styles/style";

export default function FullInfo({ route }) {
    return (
        <View style={ globalStyle.main }>
            <Text style={ globalStyle.title }>{ route.params.name } </Text>
            <Text>{ route.params.anons }</Text>
            <Text>{ route.params.full }</Text>
            <Image source={
                {
                    width: '100%',
                    height: 500,
                    uri: route.params.image
                }
            }></Image>
        </View>
    )
}