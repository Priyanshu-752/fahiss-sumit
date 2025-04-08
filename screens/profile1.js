import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const MenuItem = ({ label, icon, onPress }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <View style={styles.menuItemContent}>
      <Ionicons name={icon} size={20} color="gray" />
      <Text style={styles.menuText}>{label}</Text>
    </View>
    <Ionicons name="chevron-forward" size={20} color="gray" />
  </TouchableOpacity>
);

const profile1 = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
     
      <View style={styles.headerWrapper}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>FAHISS</Text>
          <TouchableOpacity>
            <Ionicons name="search-outline" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity  onPress={() => navigation.navigate("profile2")}>
      <View style={styles.profileCard}>
        <Image style={styles.profileImage} source={require("./pfpic.png")} />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Name Lorem</Text>
          <Text style={styles.profileDetails}>ID Code: ytr4364</Text>
          <Text style={styles.profileDetails}>
            Address: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text style={styles.profileContact}>John.doe@gmail.com</Text>
          <Text style={styles.profileContact}>+94 - 9283000192</Text>
        </View>
      </View>
      </TouchableOpacity>

      
      <View>
        <MenuItem label="Settings" icon="settings-outline" onPress={() => navigation.navigate("profile3")} />
        <MenuItem label="Payment method" icon="card-outline" onPress={() => {}} />
        <MenuItem label="Privacy policy" icon="shield-outline" onPress={() => navigation.navigate("privacypolicy")} />
        <MenuItem label="Terms & Conditions" icon="document-text-outline" onPress={() => navigation.navigate("terms")} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f0f4f8" },

  
  headerWrapper: {
    paddingTop: Platform.OS === "ios" ? 50 : 20,
    backgroundColor: "#B1C9EF",
    paddingBottom: 10,
   
    elevation: 5, 
   
    
  },
  header: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    paddingHorizontal: 16, 
    paddingVertical: 12
  },
  headerTitle: { fontSize: 20, fontWeight: "bold", color: "#000" },

  profileCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#fff",
    margin: 16,
    padding: 16,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },
  profileImage: { width: 80, height: 80, borderRadius: 40, marginRight: 16 },
  profileInfo: { flex: 1 },
  profileName: { fontSize: 18, fontWeight: "bold" },
  profileDetails: { fontSize: 12, color: "gray", marginTop: 4 },
  profileContact: { fontSize: 14, fontWeight: "600", marginTop: 8 },

  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
  },
  menuItemContent: { flexDirection: "row", alignItems: "center" },
  menuText: { marginLeft: 12, fontSize: 14, fontWeight: "500" },
});

export default profile1;
