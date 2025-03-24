import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const splash1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("./gallery.png")} style={styles.image} />
      </View>
      <View style={styles.textPlaceholder}>
        <View style={styles.line} />
        <View style={styles.smallLinesContainer}>
          <View style={styles.smallLine} />
          <View style={styles.smallLine} />
          <View style={styles.smallLine}></View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        <View style={styles.pagination}>
          <View style={[styles.dot,styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      <TouchableOpacity onPress={() => navigation.navigate("splash2")} style={styles.button}>
        <Text style={styles.buttonText}>></Text>
      </TouchableOpacity>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B1C9EF",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    marginTop: 0,
    alignItems: "center",
    width:260,
    height: 260,
  },
  
  
  image: {
    width: 250,
    height: 250,
    tintColor: "white",
  },
  textPlaceholder: {
    marginTop: 70,
    alignItems: "center",
  },
  line: {
    width: 350,
    height: 20,
    backgroundColor: "white",
    marginBottom: 30,
   
  },
  smallLinesContainer: {
    alignItems: "center",
  },
  smallLine: {
    width: 272,
    height: 16,
    backgroundColor: "white",
    marginVertical: 3,
    
  },
  bottomContainer: {
    position: "absolute",
    bottom: 40,
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  skipText: {
    fontSize: 16,
    color: "#395886",
  },
  pagination: {
    flexDirection: "row",
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: "#ccc",
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#395886",
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: "#395886",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
export default splash1;