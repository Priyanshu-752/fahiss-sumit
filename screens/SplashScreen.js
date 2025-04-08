import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.welcomeText}>Welcome to</Text>
        <Text style={styles.appName}>Fahiss</Text>
      </View>

      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>LOGO</Text>
      </View>

      <Text style={styles.title}>Lorem ipsum dolor sit amet</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore.
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("splash1")}
        style={styles.nextButton}
      >
        <Text style={styles.nextText}>&gt;</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BFD7F0",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  topSection: {
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 26,
    color: "#fff",
  },
  appName: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 5,
  },
  logoContainer: {
    width: width * 0.45,
    height: width * 0.45,
    borderRadius: (width * 0.45) / 2,
    borderWidth: 5,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#39588644",
  },
  logoText: {
    fontSize: 20,
    color: "#fff",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    color: "#fff",
    marginHorizontal: 20,
    fontSize: 14,
  },
  nextButton: {
    width: 50,
    height: 50,
    backgroundColor: "#395886",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
  },
  nextText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default SplashScreen;
