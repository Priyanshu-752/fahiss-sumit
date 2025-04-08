import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import IDVSlider from './IDVSlider';
import { Ionicons } from '@expo/vector-icons';

const RegistrationRenew1 = ({ navigation }) => {
  const [idvCover, setIdvCover] = useState('Select IDV');
  const [car, setCar] = useState('Audi A3');
  const [sortBy, setSortBy] = useState('Low to high');
  const [isSliderVisible, setIsSliderVisible] = useState(false);

  const insuranceOptions = [
    { id: '1', name: 'Lorem Ipsum Insurance', priceYr: '252 $/yr', priceMo: '21$/mo' },
    { id: '2', name: 'Lorem Ipsum Insurance', priceYr: '960 $/yr', priceMo: '80$/mo' },
    { id: '3', name: 'Lorem Ipsum Insurance', priceYr: '960 $/yr', priceMo: '80$/mo' },
  ];

  const renderHeader = () => (
    <View style={styles.headerWrapper}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Registration Renewal</Text>
      </View>
    </View>
  );

  const renderFilters = () => (
    <View style={styles.filterContainer}>
      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>IDV Cover:</Text>
        <Picker selectedValue={idvCover} onValueChange={setIdvCover} style={styles.picker}>
          <Picker.Item label="Select IDV" value="" />
          <Picker.Item label="High" value="High" />
          <Picker.Item label="Low" value="Low" />
        </Picker>
      </View>
      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>Select Car:</Text>
        <Picker selectedValue={car} onValueChange={setCar} style={styles.picker}>
          <Picker.Item label="Audi A3" value="Audi A3" />
          <Picker.Item label="BMW X5" value="BMW X5" />
        </Picker>
      </View>
      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>Sort by:</Text>
        <Picker selectedValue={sortBy} onValueChange={setSortBy} style={styles.picker}>
          <Picker.Item label="Low to high" value="Low to high" />
          <Picker.Item label="High to low" value="High to low" />
        </Picker>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      {renderHeader()}
      {renderFilters()}
      <View style={styles.insuranceTitleContainer}>
        <Text style={styles.insuranceTitle}>Third Party Insurance</Text>
        <Text style={styles.insuranceDescription}>
          Please select a company for Third-Party Liability Insurance renewal.
          Some trusted options include:
        </Text>
      </View>
      <FlatList
        data={insuranceOptions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Image source={{ uri: 'https://via.placeholder.com/60' }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.insuranceName}>{item.name}</Text>
              <Text style={styles.features}>✔ Lorem ipsum dolor sit amet,</Text>
              <Text style={styles.features}>✔ Lorem ipsum dolor sit amet,</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.price}>{item.priceYr}</Text>
                <Text style={styles.monthly}>{item.priceMo}</Text>
              </View>
              {item.id === '1' && (
                <TouchableOpacity onPress={() => setIsSliderVisible(true)}>
                  <Text style={styles.setIDVButton}>Set IDV</Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity style={styles.viewFeaturesButton}>
                <Text style={styles.viewFeaturesText}>View all features</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
      <IDVSlider visible={isSliderVisible} onClose={() => setIsSliderVisible(false)} />
      <TouchableOpacity
        style={styles.inspectionButton}
        onPress={() => navigation.navigate('VehicleTechnicalInspection')}
      >
        <Text style={styles.inspectionButtonText}>Inspection</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#E0E8F9',
    borderBottomWidth: 1,
    borderBottomColor: '#D1D9E6'
  },
  pickerContainer: { alignItems: 'flex-start' },
  pickerLabel: { fontSize: 14, marginBottom: 5 },
  picker: { width: 100, backgroundColor: '#fff', borderRadius: 8, height: 40 },
  insuranceTitleContainer: { paddingHorizontal: 16, marginBottom: 16 },
  insuranceTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  insuranceDescription: { color: '#555', fontSize: 14, marginBottom: 20 },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  image: { width: 60, height: 60, borderRadius: 10, marginRight: 15 },
  info: { flex: 1, justifyContent: 'space-between' },
  insuranceName: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  features: { color: '#555', fontSize: 14, marginBottom: 3 },
  priceContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 },
  price: { fontSize: 16, fontWeight: 'bold', color: '#28a745' },
  monthly: { fontSize: 14, color: '#395886' },
  setIDVButton: { color: '#395886', marginTop: 10 },
  viewFeaturesButton: { marginTop: 10 },
  viewFeaturesText: { color: '#395886' },
  inspectionButton: {
    backgroundColor: '#395886',
    padding: 16,
    borderRadius: 25,
    margin: 16,
    alignItems: 'center',
  },
  inspectionButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RegistrationRenew1;