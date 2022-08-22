import { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';

import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';

import { globalStyle } from "./styles/style";

const fonts = () => Font.loadAsync({
  'bold': require('./assets/fonts/Poppins-Bold.ttf'),
  'regular': require('./assets/fonts/Poppins-Regular.ttf')
});

export default function App() {
  const [font, setFont] = useState(false);

  if (font) {
	  return (
		  <View style={ globalStyle.main }>
              <Text style={ globalStyle.title }>HELLO WORLD!</Text>
          </View>
      );
  } else {
	  return (
          <AppLoading startAsync={ fonts }
                      onFinish={ () => setFont(true) }
                      onError={ console.warn }/>
      );
  }
}

const styles = StyleSheet.create({

});
