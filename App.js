import { useState } from "react";
import { StyleSheet } from 'react-native';
import MainStack from './Navigation';

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const fonts = () => Font.loadAsync({
  'bold': require('./assets/fonts/Poppins-Bold.ttf'),
  'regular': require('./assets/fonts/Poppins-Regular.ttf')
});

export default function App() {
  const [isFontLoaded, setFont] = useState(false);

  if (isFontLoaded) {
    return (
      <MainStack />
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
