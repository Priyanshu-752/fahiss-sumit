import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Image } from "react-native";
import Checkbox from "expo-checkbox";

const CivilIDInput = ({ navigation }) => {
  const [civilID, setCivilID] = useState("");
  const [isChecked, setChecked] = useState(false);

  const maskedCivilID = civilID.replace(/./g, "●");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.appTitle}>Welcome to Fahiss</Text>
        <Text style={styles.heading}>Insert Your Kuwait Civil ID</Text>

        <View style={styles.imageContainer}>
          <Image source={require("./flag.png")} style={styles.image} />
        </View>

        <View style={styles.labelContainer}>
          <Text style={styles.label}>Enter 12-digit national identification number</Text>
          <TextInput
            style={styles.input}
            placeholder="Civil ID"
            onSubmitEditing={Keyboard.dismiss}
            keyboardType="numeric"
            maxLength={12}
            value={maskedCivilID}
            onChangeText={setCivilID}
          />
        </View>

        <TouchableOpacity
        onPress={() => navigation.navigate("home")}   
          style={[
            styles.loginButton,
            { backgroundColor: civilID.length === 12 ? "#395886" : "#D5DEEF" },
          ]}
        >
          <Text
          style={styles.loginText}>Log in</Text>
        </TouchableOpacity>

        <View style={styles.termsContainer}>
          <Checkbox value={isChecked} onValueChange={setChecked} color="#395886" />
          <Text style={styles.termsText}>I agree to Fahiss Terms and Services</Text>
        </View>

        <TouchableOpacity>
          <Text style={styles.helpText}>Help</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B1C9EF",
    alignItems: "center",
    justifyContent: "center",
  },

  appTitle: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    bottom: 110,
  },

  heading: {
    fontSize: 24,
    bottom: 100,
    color: "white",
    alignItems: "center",
  },

  imageContainer: {
    width: 62,
    height: 70,
    marginBottom: 0,
    bottom: 40,
  },

  image: {
    width: 62,
    height: 70,
  },

  labelContainer: {
    width: 311,
    height: 70,
    marginBottom: 20,
  },

  label: {
    fontSize: 14,
    color: "#FFFFFF",
    marginBottom: 10,
    right: 17,
  },

  input: {
    width: 345,
    height: 46,
    borderColor: "#FFFFFF",
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: "#FFF",
    fontSize: 16,
    right: 19,
  },

  loginButton: {
    width: 317,
    height: 48,
    paddingVertical: 12,
    borderRadius: 50,
    alignItems: "center",
    marginBottom: 20,
    top: 155,
  },

  loginText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  termsContainer: {
    flexDirection: "row",
    color: "#FFFF",
    top: 150,
    marginBottom: 0,
  },

  termsText: {
    fontSize: 14,
    color: "#395886",
    marginLeft: 10,
    width: 247,
    height: 40,
    top: 4,
  },

  helpText: {
    fontSize: 14,
    color: "#395886",
    textDecorationLine: "underline",
    top: 190,
    left: 140,
  },
});

export default CivilIDInput;
