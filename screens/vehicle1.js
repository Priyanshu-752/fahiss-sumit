import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const vehicles = [
  {
    model: 'Model Name',
    type: 'Vehicle Type (car/motorbike/truck)',
    number: 'Vehicle number',
    variant: 'Variant',
    fuel: 'fuel type',
    year: 'Registration Year',
  },
  {
    model: 'Model Name',
    type: 'Vehicle Type (car/motorbike/truck)',
    number: 'Vehicle number',
    variant: 'Variant',
    fuel: 'fuel type',
    year: 'Registration Year',
  },
];

const vehicle1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Vehicles</Text>
      </View>

      {/* Vehicle List */}
      <ScrollView style={styles.vehicleList}>
        {vehicles.map((vehicle, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.vehicleCard} 
            onPress={() => navigation.navigate('VehicleDetailsPage', { vehicle })}
          >
            <Text style={styles.vehicleType}>{vehicle.type}</Text>
            <Text style={styles.modelName}>{vehicle.model}</Text>
            <Text style={styles.vehicleNumber}>{vehicle.number}</Text>
            <Text style={styles.details}>{`${vehicle.variant}  |  ${vehicle.fuel}  |  ${vehicle.year}`}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Footer Navigation */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home" size={28} color="#4682EF" />
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Ionicons name="person-outline" size={28} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Ionicons name="headset-outline" size={28} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: '#E8F0FE',
  },
  headerTitle: { marginLeft: 16, fontSize: 18, fontWeight: 'bold' },
  vehicleList: { paddingHorizontal: 16, marginTop: 8 },
  vehicleCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  vehicleType: { fontSize: 12, color: '#555' },
  modelName: { fontSize: 16, fontWeight: 'bold', marginTop: 4 },
  vehicleNumber: { fontSize: 14, color: '#777', marginTop: 4 },
  details: { fontSize: 12, color: '#777', marginTop: 8 },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    backgroundColor: '#B0C4DE',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  footerItem: { alignItems: 'center' },
  footerText: { marginTop: 4, fontSize: 12, color: '#4682EF' },
});

export default vehicle1;