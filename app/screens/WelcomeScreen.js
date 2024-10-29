import React from "react";
import { Text, StyleSheet, View, ImageBackground, Image } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      source={require("../assets/welcomeScreen_BG.jpg")}
      style={styles.bg_container}
    >
      <View style={styles.logo_view}>
        <Image
          style={styles.logo_picture}
          source={require("../assets/Donewithit_logo.png")}
        />
        <Text style={styles.text_view}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.button_Container}>
        <Text style={[styles.button, styles.signInButton]}>Log In</Text>
        <Text style={[styles.button, styles.signUpButton]}>Register</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg_container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  logo_picture: {
    width: 150,
    height: 160,
  },
  logo_view: {
    alignItems: "center",
    width: 300,
    position: "absolute",
    top: 135,
  },
  text_view: {
    color: "#280000",
    fontSize: 22,
    fontWeight: "bold",
  },
  button_Container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "100%",
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: 30,
    textAlign: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  signInButton: {
    backgroundColor: "#fc5c65",
  },
  signUpButton: {
    backgroundColor: "#4ecdc4",
  },
});

export default WelcomeScreen;
