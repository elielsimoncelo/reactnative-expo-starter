import React, { useCallback } from 'react';
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import Cesta from './src/telas/Cesta';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import mock from './src/mocks/cesta';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontCarregada) {
      await SplashScreen.hideAsync();
    }
  }, [fontCarregada]);

  if (!fontCarregada) {
    return null;
  }

  return (
    <SafeAreaView onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <StatusBar translucent={true} backgroundColor="#000" barStyle='light-content' />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  statusBar: {
    backgroundColor: "#4F34"
  }
})