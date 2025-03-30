import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import supportasi from './supportasi';

const supportasi1 = ({ navigation }) => {
  const [selectedVehicles, setSelectedVehicles] = useState([]);
  const [idNumber, setIdNumber] = useState("");
  const vehicles = [
    { id: 1, name: 'Audi A3', plate: 'XYZ9875' },
    { id: 2, name: 'Audi A3', plate: 'XYZ9875' }
  ];

  const toggleVehicleSelection = (vehicle) => {
    if (selectedVehicles.some(item => item.id === vehicle.id)) {
      setSelectedVehicles(selectedVehicles.filter(item => item.id !== vehicle.id));
    } else {
      setSelectedVehicles([...selectedVehicles, vehicle]);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header from supportasi */}
      <View style={styles.headerWrapper}>
        <Ionicons name="arrow-back-outline" size={24} color="#000" onPress={() => navigation.goBack()} />
        <Text style={styles.title}>Assign Someone</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Select Vehicle</Text>
        <FlatList
          data={vehicles}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => toggleVehicleSelection(item)} style={styles.vehicleButton}>
              <Text style={styles.vehicleText}>{item.name} {item.plate}</Text>
              {selectedVehicles.some(v => v.id === item.id) && (
                <Ionicons name="close-circle" size={20} color="#4682EF" />
              )}
            </TouchableOpacity>
          )}
          horizontal
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Type Kuwait Civil ID</Text>
        <TextInput
          style={styles.input}
          placeholder="ID number"
          value={idNumber}
          onChangeText={setIdNumber}
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity style={styles.requestButton}>
        <Text style={styles.requestButtonText}>Send Request</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB' },
  headerWrapper: {
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    backgroundColor: '#B1C9EF',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  title: { fontSize: 18, fontWeight: 'bold', marginLeft: 16 },
  row: { flexDirection: 'column', paddingVertical: 10 },
  label: { fontSize: 16, marginBottom: 8 },
  vehicleButton: { flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: '#FFFFFF', borderRadius: 10, marginRight: 10 },
  vehicleText: { fontSize: 14, marginRight: 5 },
  input: { backgroundColor: '#FFFFFF', padding: 15, borderRadius: 10, marginBottom: 20 },
  requestButton: { backgroundColor: '#4682EF', padding: 15, borderRadius: 10, alignItems: 'center' },
  requestButtonText: { color: '#FFFFFF', fontWeight: 'bold' },
});

export default supportasi1;
