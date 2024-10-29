import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

//youtube link: https://www.youtube.com/watch?v=0-S5a0eXPoc

export default function App() {
  return (
    <SafeAreaProvider>
      <WelcomeScreen />
    </SafeAreaProvider>
  );

  //  <ViewImageScreen/>
}
