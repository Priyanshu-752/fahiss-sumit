import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const policies2 = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <View style={styles.headerWrapper}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Policies</Text>
        </View>
      </View>

      <ScrollView style={styles.detailsContainer}>
        <Text style={styles.sectionTitle}>MOTOR VEHICLE INSURANCE CERTIFICATE</Text>
        <View style={styles.detailBox}>
          {renderDetail("Policy Name", "Lorem ipsum")}
          {renderDetail("Policy Number", "2120044285", true)}
          {renderDetail("Type of Cover", "Comprehensive Cover\n(Against Loss Damage & Third Party Liability)")}
          {renderDetail("Name of the Insured", "Vaseem Abdul Samad")}
          {renderDetail("Make of vehicle", "BMW - 320i - Private")}
          {renderDetail("Type of Body", "Saloon")}
          {renderDetail("Registration Number", "KJH009438")}
          {renderDetail("Year of Manufacture", "2012")}
          {renderDetail("Chassis Number", "WBA3B1109CF096429")}
          {renderDetail("Engine Number", "B0510173")}
          {renderDetail("Colour", "Silver")}
          {renderDetail("Seating capacity", "5", true)}
          {renderDetail("Mortgage", "----------------")}
          {renderDetail("Value of Insured Vehicle", "AED 35,000.00", true)}
          {renderDetail("Premium", "AED 910.00")}
          {renderDetail("Commencement date of Insurance", "01/03/2021 15:22:00")}
          {renderDetail("Expiry Date Of Insurance", "31/03/2022 23:59:00")}
          {renderDetail("Date", "01/03/2021 16:17:02")}
          {renderDetail("RTA Uploading Status", "The Insurance policy added successfully.\nPlate(41612/ABU DHABI/SIXTH CATEGORY/PRIVATE)\nChassis No(WBA3B1109CF096429)\nTCF No(2150018241)")}
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

const renderDetail = (label, value, boldValue) => (
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
  detailsContainer: { paddingHorizontal: 16, marginTop: 8 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 12 },
  detailBox: {
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
  row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 6 },
  label: { fontSize: 14, color: '#555' },
  value: { fontSize: 14, color: '#000' },
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

export default policies2;