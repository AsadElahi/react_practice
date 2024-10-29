import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Platform,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

function ViewImageScreen(props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.left_box} />
        <View style={styles.right_box} />
        <Image
          style={styles.image_style}
          source={require("../assets/Imageview_bg.jpg")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, // Ensure padding for Android
  },
  container: {
    flex: 1, // Ensure the container takes up the full screen
    justifyContent: "center", // Center the content vertically
    alignItems: "center", // Center the content horizontally
    backgroundColor: "black",
  },
  left_box: {
    width: 50,
    height: 50,
    backgroundColor: "#fc5c65",
    position: "absolute",
    top: 0,
    left: width * 0.1, // 10% from the left side of the screen
  },
  right_box: {
    width: 50,
    height: 50,
    backgroundColor: "#4ecdc4",
    position: "absolute",
    top: 0,
    right: width * 0.1, // 10% from the right side of the screen
  },
  image_style: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    borderWidth: 5, // Add border width
    borderColor: "black", // Add border color
  },
});

export default ViewImageScreen;
