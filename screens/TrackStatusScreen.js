import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

const TrackStatusScreen = ({ navigation }) => {
  const [selectedVehicle, setSelectedVehicle] = useState('VehicleNumber');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerWrapper}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Track Status</Text>
          <Ionicons name="search-outline" size={24} color="#000" />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.label}>Select Vehicle</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={selectedVehicle}
            onValueChange={(itemValue) => setSelectedVehicle(itemValue)}
          >
            <Picker.Item label="Vehicle Number" value="VehicleNumber" />
            <Picker.Item label="Car A" value="CarA" />
            <Picker.Item label="Car B" value="CarB" />
          </Picker>
        </View>

        {/* Status Timeline */}
        <View style={styles.timelineCard}>
          <Text style={styles.date}>09 Nov 2025</Text>
          <Text style={styles.time}>9:49 AM</Text>

          <View style={styles.timelineItem}>
            <Ionicons name="checkmark-circle-outline" size={20} color="#4682EF" />
            <Text style={styles.statusText}>Video Uploaded</Text>
          </View>

          <View style={styles.timelineItem}>
            <Ionicons name="ellipse-outline" size={20} color="#000" />
            <Text>Video Approved</Text>
          </View>

          <View style={styles.timelineItem}>
            <Ionicons name="ellipse-outline" size={20} color="#000" />
            <View>
              <Text>MOI Review</Text>
              <Text style={styles.inProgress}>In Progress</Text>
            </View>
          </View>

          <View style={styles.timelineItem}>
            <Ionicons name="ellipse-outline" size={20} color="#000" />
            <View>
              <Text>Registration Renewal</Text>
              <Text style={styles.approved}>Approved</Text>
            </View>
          </View>

          <TouchableOpacity>
            <Text style={styles.downloadText}>Download the certificate</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Footer (Copied from home component) */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <View style={styles.footerIconBoxActive}>
            <Ionicons name="home-outline" size={28} color="#395886" />
            <Text style={styles.footerTextActive}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate("profile1")} >
          <Ionicons name="person-outline" size={28} color="white" style={{ marginBottom: 6 }} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate("supporthm")}>
          <Ionicons name="headset-outline" size={28} color="white" style={{ marginBottom: 6 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB' },
  headerWrapper: {
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    backgroundColor: '#B1C9EF',
  },
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 16, alignItems: 'center' },
  headerTitle: { fontSize: 18, fontWeight: 'bold' },

  content: { padding: 16, paddingBottom: 70 }, // Increased paddingBottom to accommodate the footer
  label: { fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 20,
  },

  timelineCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  date: { fontSize: 14, color: '#888' },
  time: { fontSize: 12, color: '#888', marginBottom: 16 },
  timelineItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  statusText: { marginLeft: 8, fontWeight: 'bold' },
  inProgress: { color: '#FFA500', marginTop: 4 },
  approved: { color: '#32CD32', marginTop: 4 },
  downloadText: { color: '#4682EF', marginTop: 8, fontWeight: 'bold' },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#B1C9EF',
    alignItems: 'center',
    position: 'absolute', // Added position absolute
    bottom: 0, // Placed at the bottom
    left: 0,
    right: 0,
  },
  footerItem: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  footerIconBoxActive: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF2F9',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  footerTextActive: {
    marginLeft: 8,
    fontSize: 14,
    color: '#395886',
  },
  footerIconBox: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#395886',
    marginTop: 4,
  },
});

export default TrackStatusScreen;