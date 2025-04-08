import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform } from 'react-native';
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
      
      <View style={styles.headerWrapper}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Vehicles</Text>
        </View>
      </View>

     
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

      
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Home')}>
          <View style={styles.footerIconBoxActive}>
            <Ionicons name="home-outline" size={28} color="#395886" />
            <Text style={styles.footerTextActive}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate("profile1")}>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#B1C9EF',
    paddingBottom: 16,
    paddingVertical:'16',
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
    paddingVertical: 15,
    backgroundColor: '#B1C9EF',
    alignItems: 'center',
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

export default vehicle1;