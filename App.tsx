import React from "react";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Navigation from "./navigation";
import { ScreenProvider } from "responsive-native";
import {
  Nunito_400Regular,
  Nunito_700Bold,
  Nunito_500Medium,
  useFonts,
} from "@expo-google-fonts/nunito";
import { ActivityIndicator } from "react-native";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Nunito-Regular": Nunito_400Regular,
    "Nunito-Bold": Nunito_700Bold,
    "Nunito-Medium": Nunito_500Medium,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ScreenProvider baseFontSize={16}>
          <Navigation />
          <StatusBar />
        </ScreenProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
