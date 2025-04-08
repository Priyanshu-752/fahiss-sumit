import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, TextInput, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const profile2 = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
     
      <View style={styles.headerWrapper}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Profile</Text>
        </View>
      </View>
      <View style={styles.profileImageContainer}>
        <Image style={styles.profileImage} source={require("./pfpic.png")} />
      </View>

      <View style={styles.form}>
      
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput style={styles.input} value="John Doe" editable={true} />
        </View>

       
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Phone number</Text>
          <View style={styles.inputWithIcon}>
            <TextInput style={styles.inputFlex} value="+94 - 9283000192" editable={true} />
            <TouchableOpacity>
              <Ionicons name="pencil-outline" size={18} color="gray" />
            </TouchableOpacity>
          </View>
        </View>

      
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email address</Text>
          <View style={styles.inputWithIcon}>
            <TextInput style={styles.inputFlex} value="John.doe@gmail.com" editable={true} />
            <TouchableOpacity>
              <Ionicons name="pencil-outline" size={18} color="gray" />
            </TouchableOpacity>
          </View>
        </View>

        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>National address</Text>
          <TextInput
            style={[styles.input, styles.multilineInput]}
            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
            editable={true}
            multiline
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: "#FFFFFF",
  },

  
  headerWrapper: {
    paddingTop: Platform.OS === "ios" ? 50 : 20,
    backgroundColor: "#B1C9EF",
    paddingBottom: 20,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    marginTop: 14,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginLeft: 10,
  },

 
  profileImageContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },


  form: {
    paddingHorizontal: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 6,
  },

 
  input: {
    backgroundColor: "#FFF",
    padding: 14,
    borderRadius: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#DDD",
  },

  
  multilineInput: {
    minHeight: 80,
    textAlignVertical: "top",
  },

  
  inputWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#DDD",
  },
  inputFlex: {
    flex: 1,
    paddingVertical: 14,
    fontSize: 16,
  },
});

export default profile2;
