import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const VehicleDetailsPage = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <View style={styles.headerWrapper}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Vehicle Details</Text>
        </View>
      </View>

      <ScrollView style={styles.detailsContainer}>
        <Text style={styles.sectionTitle}>Overview</Text>
        <View style={styles.detailBox}>
          <Text style={styles.subTitle}>Car details</Text>
          <DetailRow label="Vehicle number" value="XYZ1290" boldValue />
          <DetailRow label="Model" value="Audi A3" boldValue />
          <DetailRow label="Variant" value="S3 Sportback" />
          <DetailRow label="Fuel type" value="Petrol" boldValue />
          <DetailRow label="Registration year" value="2020" boldValue />
          <DetailRow label="Chassis number" value="UKJHGH**********" boldValue />
        </View>

        <View style={styles.detailBox}>
          <Text style={styles.subTitle}>Insurance details</Text>
          <DetailRow label="Insurer" value="Lorem ipsum" />
          <DetailRow label="Insurance expiry" value="24 Dec 2024" boldValue />
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Home')}>
          <View style={styles.footerIconBoxActive}>
            <Ionicons name="home-outline" size={28} color="#395886" />
            <Text style={styles.footerTextActive}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person-outline" size={28} color="white" style={{ marginBottom: 6 }} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Support')}>
          <Ionicons name="headset-outline" size={28} color="white" style={{ marginBottom: 6 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const DetailRow = ({ label, value, boldValue }) => (
  <View style={styles.row}>
    <Text style={styles.label}>{label}</Text>
    <Text style={[styles.value, boldValue && styles.boldValue]}>{value}</Text>
  </View>
);

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
    paddingVertical: 16,
  },
  headerTitle: { marginLeft: 16, fontSize: 18, fontWeight: 'bold' },
  detailsContainer: {
    paddingHorizontal: 16, marginTop: 8
  },
  sectionTitle: {
    fontSize: 16, fontWeight: 'bold',
    marginBottom: 8
  },
  detailBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  subTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8
  },
  row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 6 },
  label: {
    fontSize: 14,
    color: '#555'
  },
  value: {
    fontSize: 14,
    color: '#000'
  },
  boldValue: { fontWeight: 'bold' },
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

export default VehicleDetailsPage;