import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to</Text>
      <Text style={styles.appName}>Fahiss</Text>
      
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>LOGO</Text>
      </View>
      
      <Text style={styles.title}>Lorem ipsum dolor sit amet</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore.
      </Text>
      
      <TouchableOpacity  onPress={() => navigation.navigate("splash1")} style={styles.nextButton}>
        <Text style={styles.nextText}>></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BFD7F0",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  welcomeText: {
    alignContent:"flex-start",
    fontSize: 26,
    color: "#fff",
    bottom:80,
  },
  appName: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    bottom:70,
    
  },
  logoContainer: {
    width: 190,
    height: 190,
    borderRadius: 95,
    borderWidth: 5,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  logoText: {
    fontSize: 20,
    color: "#fff",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  description: {
    textAlign: "center",
    color: "#fff",
    marginBottom: 20,
  },
  nextButton: {
    width: 50,
    height: 50,
    backgroundColor: "#395886",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    left:150,
    top:190,
  },
  nextText: {
    color: "#fff",
    fontSize: 24,
  },
});
export default SplashScreen;
