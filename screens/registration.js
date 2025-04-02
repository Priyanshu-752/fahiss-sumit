import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const registration = ({ navigation }) => {
  const vehicles = [
    { id: 1, name: 'Audi A3', plate: 'XYZ1290', year: '2022', status: 'Renewal pending', icon: require('./audi.png'), color: '#FF4B4B' },
    { id: 2, name: 'G 310 RR', plate: 'AJDF3950', year: '2021', status: 'Renewal Up-to-Date', icon: require('./bike.png'), color: '#32D74B' },
    { id: 3, name: 'G 310 RR', plate: 'AJDF3950', year: '2021', status: 'Renewal Up-to-Date', icon: require('./truck.png'), color: '#32D74B' },
    { id: 4, name: 'G 310 RR', plate: 'AJDF3950', year: '2021', status: 'Assigned Car', icon: require('./truck.png'), color: '#F6A609' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Registration</Text>
      </View>

      <Text style={styles.subtitle}>Keep track of your vehicle registrations and renewal dates effortlessly</Text>

      <ScrollView style={styles.content}>
        {vehicles.map((vehicle) => (
          <TouchableOpacity
            key={vehicle.id}
            style={styles.card}
            onPress={() => vehicle.id === 1 ? navigation.navigate('registrationrenew') : null}
          >
            <Image source={vehicle.icon} style={styles.vehicleImage} />
            <View style={styles.vehicleInfo}>
              <Text style={styles.vehicleName}>{vehicle.name}</Text>
              <Text style={styles.vehiclePlate}>{vehicle.plate}</Text>
              <Text style={styles.vehicleDetails}>| Variant | Petrol | {vehicle.year} |</Text>
            </View>

            <View style={styles.statusWrapper}>
              <Text style={[styles.status, { color: vehicle.color }]}>{vehicle.status}</Text>
              {vehicle.status === 'Renewal pending' ? (
                <Ionicons name="alert-circle" size={20} color="#FF4B4B" />
              ) : (
                <Ionicons name="checkmark-circle" size={20} color="#32D74B" />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home" size={28} color="#4682EF" />
          <Text style={styles.footerText}>Home</Text>
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
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    paddingBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: '#B1C9EF',
  },
  title: { fontSize: 18, fontWeight: 'bold', marginLeft: 16 },
  subtitle: { padding: 16, fontSize: 14, color: '#6B7280' },
  content: { paddingHorizontal: 16 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  vehicleImage: { width: 50, height: 50, marginRight: 12 },
  vehicleInfo: { flex: 1 },
  vehicleName: { fontWeight: 'bold', fontSize: 16, marginBottom: 4 },
  vehiclePlate: { fontSize: 14, color: '#6B7280' },
  vehicleDetails: { fontSize: 12, color: '#6B7280', marginTop: 4 },
  statusWrapper: { alignItems: 'flex-end' },
  status: { fontSize: 12, fontWeight: 'bold', marginBottom: 4 },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    backgroundColor: '#B1C9EF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  footerItem: { alignItems: 'center' },
  footerText: { marginTop: 4, fontSize: 12, color: '#4682EF' },
});

export default registration;
