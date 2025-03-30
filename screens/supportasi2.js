import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const helpers = [
  {
    id: 1,
    name: 'Waseem Abdul Samad',
    civilId: '**********98',
    vehicleNumber: 'XYZ1290',
    model: 'Audi A3',
    variant: 'S3 Sportback',
    insurer: 'Lorem ipsum',
    insuranceExpiry: '24 Dec 2024',
    insuranceStatus: 'Pending'
  },
  {
    id: 2,
    name: 'Waseem Abdul Samad',
    civilId: '**********98',
    vehicleNumber: 'XYZ1290',
    model: 'Audi A3',
    variant: 'S3 Sportback',
    insurer: 'Lorem ipsum',
    insuranceExpiry: '24 Dec 2024',
    insuranceStatus: 'Pending'
  }
];

const supportasi2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Ionicons name="arrow-back-outline" size={24} color="#000" onPress={() => navigation.goBack()} />
        <Text style={styles.title}>Assign Someone</Text>
      </View>

      <FlatList
        data={helpers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.helperCard}>
            <View style={styles.headerRow}>
              <Text style={styles.helperName}>{item.name}</Text>
              <TouchableOpacity><Text style={styles.removeText}>Remove helper</Text></TouchableOpacity>
            </View>
            <Text style={styles.helperDetail}>Kuwait Civil ID: {item.civilId}</Text>
            <View style={styles.detailsWrapper}>
              <Text style={styles.detailItem}>Vehicle number: {item.vehicleNumber}</Text>
              <Text style={styles.detailItem}>Model: {item.model}</Text>
              <Text style={styles.detailItem}>Variant: {item.variant}</Text>
              <Text style={styles.insuranceStatus}>Insurance details: {item.insuranceStatus}</Text>
              <Text style={styles.detailItem}>Insurer: {item.insurer}</Text>
              <Text style={styles.detailItem}>Insurance expiry: {item.insuranceExpiry}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#E5EFFF' },
  headerWrapper: {
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    backgroundColor: '#B1C9EF',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  title: { fontSize: 18, fontWeight: 'bold', marginLeft: 16 },
  helperCard: { backgroundColor: '#FFFFFF', borderRadius: 10, padding: 16, marginVertical: 10, elevation: 2 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  helperName: { fontSize: 16, fontWeight: 'bold' },
  removeText: { color: '#FF5C5C' },
  helperDetail: { fontSize: 14, color: '#666666' },
  detailsWrapper: { marginTop: 10 },
  detailItem: { fontSize: 14, marginBottom: 5 },
  insuranceStatus: { fontSize: 14, color: '#FFA500', marginBottom: 5 },
});

export default supportasi2;
