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
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Assign Someone</Text>
        </View>
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
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: '#F9FAFB'
  },
  headerWrapper: {
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    backgroundColor: '#B1C9EF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    // Add justifyContent to control spacing
    justifyContent: 'flex-start', // Align items to the start, title will be next
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16
  },
  title: { // Kept for potential future use
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16
  },
  helperCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12
  },
  helperName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  },
  removeText: { color: '#FF5C5C'

  },
  helperDetail: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 4
  },
  detailsWrapper: { marginTop: 10 },
  detailItem: {
    fontSize: 14,
    marginBottom: 3,
    color: '#555'
  },
  insuranceStatus: {
    fontSize: 14,
    color: '#FFA500',
    marginBottom: 3
  },
});

export default supportasi2;