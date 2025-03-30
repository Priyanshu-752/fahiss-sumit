import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Platform, Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const profile3 = ({ navigation }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("Arabic");
  const [pushNotification, setPushNotification] = useState(true);
  const [emailNotification, setEmailNotification] = useState(false);

  return (
    <View style={styles.container}>
   
      <View style={styles.headerWrapper}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Settings</Text>
        </View>
      </View>

      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Select Language</Text>
        {["English (US)", "English (UK)", "Arabic"].map((lang) => (
          <TouchableOpacity key={lang} style={styles.radioRow} onPress={() => setSelectedLanguage(lang)}>
            <Text style={styles.radioText}>{lang}</Text>
            <MaterialCommunityIcons 
              name={selectedLanguage === lang ? "radiobox-marked" : "radiobox-blank"} 
              size={20} 
              color={selectedLanguage === lang ? "green" : "#ccc"} 
            />
          </TouchableOpacity>
        ))}
      </View>

     
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notification</Text>

        
        <View style={styles.toggleRow}>
          <Text style={styles.toggleText}>Push notification</Text>
          <Switch
            value={pushNotification}
            onValueChange={(value) => setPushNotification(value)}
            thumbColor={pushNotification ? "green" : "#ccc"}
          />
        </View>

        
        <View style={styles.toggleRow}>
          <Text style={styles.toggleText}>Email notification</Text>
          <Switch
            value={emailNotification}
            onValueChange={(value) => setEmailNotification(value)}
            thumbColor={emailNotification ? "green" : "#ccc"}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },


  headerWrapper: {
    paddingTop: Platform.OS === "ios" ? 50 : 20,
    backgroundColor: "#B1C9EF",
    paddingBottom: 10,
   
    
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginLeft: 10,
  },

 
  section: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginTop: 20,
    marginHorizontal: 16,
    shadowColor: "white",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
  
  
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },

 
  radioRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  radioText: {
    fontSize: 14,
    color: "#333",
  },


  toggleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  toggleText: {
    fontSize: 14,
    color: "#333",
  },
});

export default profile3;
