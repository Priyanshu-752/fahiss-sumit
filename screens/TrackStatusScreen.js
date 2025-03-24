import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TrackStatusScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Track Your Vehicle Status</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#B1C9EF" },
  title: { fontSize: 28, color: "#FFF" }
});

export default TrackStatusScreen;